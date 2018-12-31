pragma solidity >=0.4.22 <0.6.0;

contract Factory{
    address [] public camparr;
    function createcamp (uint min) public 
    {
        address mycamp = new campaign(min,msg.sender);
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
    address public manager;
    mapping (address=>bool) public approvers;
    uint public minamnt;
    Request [] public reqarray;
    uint public total_contribution;
    
    constructor(uint min,address creator){
        manager = creator;
        minamnt = min;
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
}