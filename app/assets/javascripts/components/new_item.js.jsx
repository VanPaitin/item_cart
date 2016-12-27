var NewItem = React.createClass({
  handleClick() {
    var name = this.refs.name.value;
    var description = this.refs.description.value;
    handleSubmit = this.props.handleSubmit
    $("input").val("")
    $.ajax({
      url: '/api/v1/items',
      type: 'POST',
      data: { item: { name: name, description: description } },
      success: function (response) {
        handleSubmit(response)
      }
    })
  },

  render() {
    return (
      <div>
        <h1>This is a new item</h1>
        <input ref="name" placeholder="Enter the name of the item"/>
        <input ref="description" placeholder="Enter a description"/>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
});
