function skillsMember()
{
    var member = document.getElementById("member").value;
    var memberError = document.getElementById("memberError");
    var memberPattern = /^[a-zA-Z\s]+$/;
    if(memberPattern.test(member) && member.length > 0)
    {
        memberError.innerHTML = "";
        return true;
    }
    else
    {
        memberError.innerHTML = "Please enter a valid member name";
        return false;
    }
}

