pragma solidity ^0.4.24;

contract Factory{
    address [] public camparr;
    function createcamp (uint min,string desc) public 
    {
        address mycamp = new campaign(min,msg.sender,desc);
        camparr.push(mycamp);
    }
   
    function getcamp() public view returns(address []) {
        return camparr;
    }
}
contract campaign{
    struct Request{
        string description;
        uint value;
        address reciver;
        bool complete;
        uint totapproved;
    mapping (address=>bool) approvals;
    }
    string  public desc;
    address public manager;
    mapping (address=>bool) public approvers;
    uint public minamnt;
    Request [] public reqarray;
    uint public total_contribution;
    
    constructor(uint min,address creator,string _desc){
        manager = creator;
        minamnt = min;
        desc = _desc;
    } 
    modifier restricted(){
        require(msg.sender== manager);
        _;
    }
    
    function contribute() public payable{
        require(msg.value > minamnt );
        approvers[msg.sender] = true;
        total_contribution++;
    }
    
    function createreq(string des,uint val,address rec) public restricted() {
        require(msg.sender == manager);
        Request memory myreq = Request({description:des,value:val,reciver:rec,complete:false,totapproved:0});
        reqarray.push(myreq);
        
        
        
    }
    function approve(uint index) public {
        Request storage myreq = reqarray[index];
        require(approvers[msg.sender]);
        require(!myreq.approvals[msg.sender]);
         myreq.approvals[msg.sender] = true;
        myreq.totapproved++;
        

        
    }
    function finalizereq(uint index) public restricted payable
    {
     Request myreq = reqarray[index];
     require(!myreq.complete);
     require(myreq.totapproved > (total_contribution/2) );
     myreq.complete = true;
     myreq.reciver.transfer(myreq.value);
    }

    function getsummary() public view returns(uint,uint,uint,string,address)
    {
        return(total_contribution,this.balance,reqarray.length,desc,manager);
    }

    function getreqlen() public view returns(uint)
    {
        return(reqarray.length);
    }
}