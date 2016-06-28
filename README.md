# Causalaxies

This repository contains visualizations of cause/influence relationships.

It is heavily based on https://github.com/anvaka/pm (though it will likely continue to diverge from that).
Please check out that repo for more information and some cool package manager visualizations; I'm building on a fork of that repo because I haven't seen a better tool for web-viewable visualization of the data I want to visualize.

Please read [operating manual](https://github.com/anvaka/pm/tree/master/about#software-galaxies-documentation) -
it is short and describes basic navigation principles.


# Individual Visualizations

Each graph is indexed individually, and data is pushed to the `gh-pages` branch
of [causalaxies-data](https://github.com/causegraph/causalaxies-data).

<table>
  <tbody>
    <tr>
      <td align="center">
        <h3>Bower</h3>
        <a href="http://causegraph.github.io/causalaxies/#/galaxy/dbpedia?l=1">
          <img src="https://raw.githubusercontent.com/wiki/anvaka/pm/images/bower_fly_first.png">
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
        Open issue to <a href="https://github.com/causegraph/causalaxies/issues">request your own graph</a>
      </td>
    </tr>
  </tbody>
</table>

# local development

```
git clone https://github.com/anvaka/pm
cd pm
npm i
npm start
```

This will start local development sever with auto-rebuild.

## Your own graphs

This section has detailed instructions about how to use the tool
with your own graphs. Before you read any further, if your graph
is smaller than 10k nodes, consider using [ngraph.pixel](https://github.com/anvaka/ngraph.pixel)
or [VivaGraph](https://github.com/anvaka/VivaGraphJS) both should
be able to provide interactive layout.

If you have an interesting graph but don't have JavaScript experience,
please feel free to reach out to me and I'll try to make visualization
for you (my email is `anvaka@gmail.com`).

Otherwise, if you want to hack on your own, please keep reading.

### Graph

First, you will need a graph in [ngraph.graph](https://github.com/anvaka/ngraph.graph)
format. The `ngraph.graph` has detailed documentation about how to create graph,
but it also has several loaders from popular graph formats (e.g. [dot](https://github.com/anvaka/ngraph.fromdot),
[gexf](https://github.com/anvaka/ngraph.gexf))

### Layout

Now that you have a graph we need to compute the layout.

If your graph is smaller than 200k nodes, consider using [ngraph.offline.layout](https://github.com/anvaka/ngraph.offline.layout). This module was
created exactly for the purpose of the `pm` project, it is well documented, and
should be easy to get started with. You can also read `layout.js` of `all[gems|go|bower]`
packages to see more examples.

If your graph is much larger than 200k nodes, then consider using
[ngraph.native](https://github.com/anvaka/ngraph.native) - this module
is harder to work with (as it requires C++ knowledge), but it is much
faster.

The secret GitHub visualization is using [ngraph.native](https://github.com/anvaka/ngraph.native).

### Data format

Once layout is computed, we are ready to visualize. Just save the graph using
[ngraph.tobinary](https://github.com/anvaka/ngraph.tobinary#ngraphtobinary)
and store it along with latest positions file (produced by layout) into a folder.

Follow the same folder structure as in [`galactic-data`](https://github.com/anvaka/galactic-data/tree/gh-pages/npm).

Update the [config.js](https://github.com/anvaka/pm/blob/master/src/config.js) in
this repository to point to your data server, and you are ready to explore
your own graph.

# The secret visualization

The last shown visualization was secret GitHub followers visualization.
It shows all GitHub users who has more than two followers.

The visualization has more than 1,100,000 nodes, and renders
at 60 fps when flying around. The FPS drops when you hover-over
nodes to 20-30, This is because we are doing hit-testing,
to find what's under cursor.

With this many nodes, it runs well in the browser. Unfortunately
it requires more than 1GB of RAM. Which may or may not crash
your phone browser - sorry about this.

With all warnings said, here are the links:
* Indexed by [allgithub](https://github.com/anvaka/allgithub)
* [Live demo](http://anvaka.github.io/pm/#/galaxy/github?l=1)

# Feedback

Please do not hesitate to provide your feedback or bug fixes.
Even if it is something small like fixing a typo - I'd be glad to
hear from you!
