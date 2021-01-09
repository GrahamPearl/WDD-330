function saveStory()
{
    var storyName = document.getElementById("name_input");
    var storyHTML = document.getElementById("story_editor");
    localStorage(storyName,storyHTML);
}

function loadStory()
{
    var storyName = document.getElementById("name_input");
    var storyHTML = localStorage(storyName);
    document.getElementById("story_editor").value=storyHTML;
}