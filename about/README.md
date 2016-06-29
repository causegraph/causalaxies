# Causalaxies Documentation

[Causalaxies](https://causegraph.github.io/causalaxies/) visualizes relationships between things over time.
Every star (node) in this visualization represents an entity, generally a person at present.

This project is based on [Software Galaxies](https://anvaka.github.io/pm/#/).

## What do I see here?

![Causalaxies from a distance](https://raw.githubusercontent.com/causegraph/causalaxies/master/images/cg_image.png)

Every dot here represents a person, a programming language, or some other historical entity.
The position along the horizontal axis is determined by date of birth or creation (where available).
The position along the other axes is determined by a force-based layout algorithm.

Some entities are connected by lines, indicating that one influenced another.

Note: The rest of this page refers to the original visualization, but this one works in mostly the same way.

![Go packages with edges](https://raw.githubusercontent.com/anvaka/pm/master/images/go_image_all_links.png)

The size of the dots represents total number of dependents. The bigger the star - 
the more entities are using it.

## Navigating in the space

The primary focus of these visualizations is exploratory discovery. It works
best on large monitor, but also works on mobile devices. Use `one finger touch`
to fly forward, `two fingers touch` to fly backward. Rotate your device
to look around. Click on the image below to see a video demo:

[![Mobile Navigation in Software Galaxies ](http://img.youtube.com/vi/iWr-4U9tyTM/0.jpg)](http://www.youtube.com/watch?v=iWr-4U9tyTM)

If you are on the desktop, you can use `mouse wheel` to bring up keyboard map:

|    |    |    |   |
|---:|:---|---:|---|
| `W`  | Move forward  | `Up` |Rotate up|
| `S`  | Move backward  | `Down`  |Rotate down |
| `A`  | Move left  |`Left`|Rotate left|
| `D`  | Move right  |`Right` | Rotate right|
| `Q`  | Roll right  |`R` | Fly up|
| `E`  | Roll left  |`F` | Fly down|
| `L`  | Toggle links  | `Space` | Toggle steering |
| `Shift`  | Fly faster  |  |  |

I personally prefer to fly with steering mode on (`spacebar` activates it). In
this mode the spaceship will follow your mouse cursor:

![Steering mode](https://raw.githubusercontent.com/anvaka/pm/master/images/pm_steering.gif)

With this keyboard navigation you can fly far far away.

## About connections

I mentioned above that some packages are rendered with links. But why don't we
render them all? It's because we will see a beautiful hairball monster, which
is nice, but obscures the galaxy very much:

![All links](https://raw.githubusercontent.com/anvaka/pm/master/images/go_all_links_away.png)

You can also toggle the links display (using `L` key):

![no links](https://raw.githubusercontent.com/anvaka/pm/master/images/go_all_links_hidden.png)

But then we will loose sight of smaller communities. Thus by default I'm showing
only links whose length is shorter than 150 pixels:

![some links](https://raw.githubusercontent.com/anvaka/pm/master/images/go_some_links.png)

The minimal length of visible links is controlled by `ml` query string argument
(need to open in new tab with updated value to see the result). This will be
changed in future versions of the Software Galaxies Explorer.


# Searching

Search box can be used to locate a start in the graph. The input box accepts
regular expression: If you type `.` it will match all names, and show all results.

Unfortunately for larger graphs (with more than 1,000,000 nodes) this may result
in terrible performance and should be improved in the future.


# Found a bug? Have a suggestion? Feature Requests?

I need your help very much! Please, [open a new issue](https://github.com/anvaka/pm/issues/new)
if you have a suggestion, feature request or found a bug.

I wish you joyful exploration, Commander!
