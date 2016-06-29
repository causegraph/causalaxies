# Causalaxies

This repository contains visualizations of cause/influence relationships.

It is heavily based on https://github.com/anvaka/pm (though it will likely continue to diverge from that).
Please check out that repo for more information and some cool package manager visualizations; I'm building on a fork of that repo because I haven't seen a better tool for web-viewable visualization of the data I want to visualize.

Please read [operating manual](https://github.com/anvaka/pm/tree/master/about#software-galaxies-documentation) -
it is short and describes basic navigation principles.


# Individual visualizations

Each graph is indexed individually, and data is pushed to the `gh-pages` branch
of [causalaxies-data](https://github.com/causegraph/causalaxies-data).

<table>
  <tbody>
    <tr>
      <td align="center">
        <h3>DBpedia</h3>
        <a href="http://causegraph.github.io/causalaxies/#/galaxy/dbpedia?l=1">
          <img src="https://raw.githubusercontent.com/causegraph/causalaxies/master/images/dbpedia_300px.png">
        </a><br />
        <!-- TODO put processing scripts on github -->
        <!-- <a href="https://github.com/causegraph/REPONAME">indexer</a> | -->
        <a href="http://causegraph.github.io/causalaxies/#/galaxy/dbpedia?l=1">
      </td>
      <td align="center">
        <h3>Coming soon...</h3>
        I have more datasets I hope to add soon.
      </td>
      <td align="center">
        <h3>Your graph?</h3>
        Open an issue to <a href="https://github.com/causegraph/causalaxies/issues">request your own graph</a>
      </td>
    </tr>
  </tbody>
</table>

## Layout note

Visualizations in this repository use a [slightly-modified version](https://github.com/causegraph/ngraph.offline.layout) of [ngraph.offline.layout](https://github.com/anvaka/ngraph.offline.layout) that repositions nodes along one axis according to the date/year stored in some node data.

# Local development

The README in the [original repo](https://github.com/anvaka/pm) has a lot of information on local development and experimenting with your own data.

# Feedback

Feedback is welcome!  Please create a new [issue](https://github.com/causegraph/causalaxies/issues) or send email to `info@causegraph.org`.
