let narrative   = document.getElementById("narrative");
    identify    = document.getElementById("identify");
    selectors   = document.getElementById("selectors");

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function reset() {
  $(".wandMaker").each(function() { this.selectedIndex = 0 });
  for (i=0; i<narrative.children.length; i++) {
    narrative.children[i].textContent = '';
    identify.children[i].textContent = '';
    identify.children[i].style.opacity=0;
    narrative.children[i].style.opacity=0;
  };
};

document.getElementById("random").addEventListener("click", function() {
  reset();
  let indices = [];
  $(".wandMaker").each(function() {
    this.selectedIndex = getRandomArbitrary(1, this.options.length);
    indices.push(this.selectedIndex);
  });
  
  for (i=0; i<identify.children.length; i++) {
    identify.children[i].textContent = (selectors.children[i].options[indices[i]].text);
	identify.children[i].style.opacity=1;
    narrative.children[i].style.opacity=1;
  };
  
  for (i=0; i<narrative.children.length; i++) {
    narrative.children[i].textContent = selectors.children[i].options[indices[i]].value;
  }
});

document.getElementById("reset").addEventListener("click", reset);

$('#selectWood').change(function(){
  $("#wood").html('');
  answer = $(this).val();
  $("#wood").append(answer);
});

$('#selectCore').change(function(){
  $("#core").html('');
  answer = $(this).val();
  $("#core").append(answer);
});

$('#selectLength').change(function(){
  $("#length").html('');
  answer = $(this).val();
  $("#length").append(answer);
});

$('#selectFlex').change(function(){
  $("#flex").html('');
  answer = $(this).val();
  $("#flex").append(answer);
});

$('#selectWood').change(function(){
  $(".wood").html('');
  answer = $('#selectWood option:selected').text();
  $(".wood").append(answer + '. ');
});

$('#selectCore').change(function(){
  $(".core").html('');
  answer = $('#selectCore option:selected').text();
  $(".core").append(answer);
});

$('#selectLength').change(function(){
  $(".length").html('');
  answer = $('#selectLength option:selected').text();
  $(".length").append(answer);
});

$('#selectFlex').change(function(){
  $(".flex").html('');
  answer = $('#selectFlex option:selected').text();
  $(".flex").append(answer);
});
