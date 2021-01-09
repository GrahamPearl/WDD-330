'use strict';

const links = [
    {
        label: "Week1 notes",
        url: "week1/index.html"
    },
    {
        label: "Week2 notes",
        url: "week2/index.html"
    },
    {
        label: "Week3 notes",
        url: "week3/index.html"
    }
]

function getNavigationLINKS() {

    if (document.getElementsByTagName("ol").length) {

        for (var i = 0; i < links.length; i++) {
            var node = document.createElement("LI");
            var nodeLink = document.createElement("A");
            nodeLink.href = links[i].url;

            var nodeText = document.createTextNode(links[i].label);
            node.appendChild(nodeLink);
            nodeLink.appendChild(nodeText);
            document.getElementsByTagName("ol")[0].appendChild(node);
        }
    }


}