var AllItems = React.createClass({
  render() {
    var items = this.props.items.map(item => {
      return (
        <div key={item.id}>
          <Item item={item}
                handleDelete={() => this.props.handleDelete(item.id)}
                handleUpdate={item => this.props.onUpdate(item)} />
        </div>
      )
    })
    return (
      <div>{items}</div>
    );
  }
})