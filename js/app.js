var data = [
    {id: 1, title: "Item 1", text: "Details 1"},
    {id: 2, title: "Item 2", text: "Details 2"}
];

var Page = React.createClass({
    render: function() {
        return (
            <div className="container">
                <h1>React Prototype</h1>
                <List data={this.props.data}/>
            </div>
        );
    }
});

var List = React.createClass({
    render: function() {
        var items = this.props.data.map(function (element) {
           return (
                <div>
                    {element.title}
                </div>            
            );
        });
        return (
            <div className="subcomponent">
                {items}
            </div>
        );
    }
});

ReactDOM.render(
    <Page data={data}/>,
    document.getElementById('app')
);
