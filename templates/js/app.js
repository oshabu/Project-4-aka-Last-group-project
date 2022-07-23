var vizList = [
  "https://public.tableau.com/views/ProjectFinal_16582322310950/Dashboard2?:language=en-GB&publish=yes&:display_count=n&:origin=viz_share_link",
  "https://public.tableau.com/views/ProjectFinal2_16583244440630/Uncontinuous?:language=en-GB&publish=yes&:display_count=n&:origin=viz_share_link",
  "https://public.tableau.com/views/OverorUnderweightData/Sheet6?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
];
var viz,
  vizLen = vizList.length,
  vizCount = 0;

function createViz(vizPlusMinus) {
  var vizDiv = document.getElementById("vizContainer"),
    options = {
      hideTabs: true,
    };

  vizCount = vizCount + vizPlusMinus;

  if (vizCount >= vizLen) {
    // Keep the vizCount in the bounds of the array index.
    vizCount = 0;
  } else if (vizCount < 0) {
    vizCount = vizLen - 1;
  }

  if (viz) {
    // If a viz object exists, delete it.
    viz.dispose();
  }

  var vizURL = vizList[vizCount];
  viz = new tableau.Viz(vizDiv, vizURL, options);
}
