var Parent = React.createClass({
  render: function() {
    return (
      <div className="component">
        Component.
        <Child />
      </div>
    );
  }
});

var Child = React.createClass({
  render: function() {
    return (
      <div className="subcomponent">
        Child component.
      </div>
    );
  }
});

ReactDOM.render(
    <Parent />,
    document.getElementById('app')
);
