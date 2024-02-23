function skillsMember()
{
  var member = new Object();
  member.skills = ["a", "b", "c"];
  member.show = function() {
    for (var i = 0; i < this.skills.length; i++) {
      console.log(this.skills[i]);
    }
  };
  return member;
}