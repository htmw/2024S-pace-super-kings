const demo = (e)=>{
    e.preventDefault();
    let prompt_text = document.getElementById("prompt_text").value;
    alert("Send Prompt to AI "+prompt_text);
}
export default demo;