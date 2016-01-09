# Speed Dial For Material Design Lite

This plugin adds a very simple Speed Dial element to any project using MDL.

MDL doesn't include a Speed Dial component (the FAB-based menu) by default, so this plugin can be used to add that missing element to the library.

## How to use it
You can place your speed dial in two different places: at the right-bottom corner of the page and in the edge of the header/navbar.

#### Right-bottom corner placed
Use the `.mdl-speed-dial--bottom-fixed` class.
```html
<div class="mdl-speed-dial mdl-speed-dial--bottom-fixed">
	<div class="mdl-speed-dial__options">
		<div class="mdl-speed-dial__option">
			<p class="mdl-speed-dial__tooltip">Option 3</p>
			<a href="#" class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab">
				<i class="material-icons">folder</i>
			</a>
		</div>
		<div class="mdl-speed-dial__option">
			<p class="mdl-speed-dial__tooltip">Option 2</p>
			<a href="#" class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab">
				<i class="material-icons">attach_file</i>
			</a>
		</div>
		<div class="mdl-speed-dial__option">
			<p class="mdl-speed-dial__tooltip">Option 1</p>
			<a href="#" class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab">
				<i class="material-icons">create</i>
			</a>
		</div>
	</div>
	<!-- Be sure to put the .mdl-speed-dial__main-fab button after the .mdl-speed-dial__options section -->
	<button class="mdl-speed-dial__main-fab mdl-speed-dial__main-fab--spin mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
		<i class="material-icons">add</i>
	</button>
</div>
```
### Header edge placed
Put the code inside the ```<header>``` element, as a direct child.

Use the `.mdl-speed-dial--header-edge` class.
```html
<div class="mdl-speed-dial mdl-speed-dial--header-edge">
  <!-- Be sure to put the .mdl-speed-dial__main-fab button before the .mdl-speed-dial__options section -->
	<button class="mdl-speed-dial__main-fab mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
		<i class="material-icons">add</i>
	</button>
	<div class="mdl-speed-dial__options">
		<div class="mdl-speed-dial__option">
			<p class="mdl-speed-dial__tooltip">Option 1</p>
			<a href="#" class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab">
				<i class="material-icons">folder</i>
			</a>
		</div>
		<div class="mdl-speed-dial__option">
			<p class="mdl-speed-dial__tooltip">Option 2</p>
			<a href="#" class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab">
				<i class="material-icons">attach_file</i>
			</a>
		</div>
		<div class="mdl-speed-dial__option">
			<p class="mdl-speed-dial__tooltip">Option 3</p>
			<a href="#" class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab">
				<i class="material-icons">create</i>
			</a>
		</div>
	</div>
</div>
```

## Options

<table>
	<thead>
		<tr>
			<th>Modifier Class</th>
			<th>Description</th>
		</tr>
	</head>
	<tbody>
		<tr>
			<td>.mdl-speed-dial--bottom-fixed</td>
			<td>Place the speed dial at the right-bottom corner of the page.</td>
		</tr>
		<tr>
			<td>.mdl-speed-dial--header-edge</td>
			<td>Place the speed dial at the edge of the header/navbar.</td>
		</tr>
		<tr>
			<td>.mdl-speed-dial__tooltip--hidden</td>
			<td>Hide the tooltip of the FAB option element and show it only when hover.</td>
		</tr>
		<tr>
			<td>.mdl-speed-dial__main-fab--spin</td>
			<td>Rotate the main FAB when hover.</td>
		</tr>
	</tbody>
</table>

## Dependencies
The only dependency is jQuery (besides MDL).
