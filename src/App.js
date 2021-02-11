import { Component } from 'react';
import './App.css';

class BlogPost extends Component {
  constructor(props) {
     super(props);
     this.state = {
       isEditing: false,
       title: this.props.post.title,
       text: this.props.post
     }

     this.handleInput = this.handleInput.bind(this);
     this.handleEdit = this.handleEdit.bind(this);
  }
  handleInput(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleEdit(e) {
    if(e.keyCode === 13) {
      console.log(this.state.title);
      this.props.editPost(this.props.post, this.state.title, this.state.text)
      this.setState({isEditing: false })
    }
  }
  render() {
    const post = this.props.post
    return (<li>
      {
        this.state.isEditing
        ?
        <>
        <input type="text" name="title" value={this.state.title} onChange={this.handleInput} onKeyUp={this.handleEdit} />
        <input type="text" name="text" value={this.state.text} onChange={this.handleInput} onKeyUp={this.handleEdit} />
        </>
        :
        <section className="card">
          <h1>{post.title}</h1>
          <p>{post.text}</p>
        </section>
      }
      <div className="edit-buttons">
      <button onClick={() => this.setState({isEditing: !this.state.isEditing})}>Edit</button>
      <button onClick={() => this.props.deletePost(post)}>Delete</button>
      </div>
      
      </li>)
  }
}


function BlogList(props) {
  const posts = props.posts?.map((post, index) => (
    <BlogPost key={index}
              post={post}
              editPost={props.editPost}
              deletePost={props.deletePost}/>
  ));
  return (
    <ul>
      {posts}
    </ul>
  )
}

class BlogForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      text: ""
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    this.props.addPost(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" value={this.state.title} onChange={this.handleInput}/>

        <label htmlFor="text">Text</label>
        <input type="text" id="text" name="text" value={this.state.text} onChange={this.handleInput}/>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.addPost = this.addPost.bind(this);
    this.editPost = this.editPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  componentDidMount() {
    const posts = [];

    this.setState({ posts });
  }

  addPost(post) {
    const posts = [...this.state.posts];
    posts.push(post);
    this.setState({ posts });
  }

  editPost(originalPost, updatedTitle, updatedText) {
    const posts = [...this.state.posts];
    const index = posts.indexOf(originalPost);
    posts[index].title = updatedTitle;
    posts[index].text = updatedText;
    this.setState({posts});
  }

  deletePost(post) {
    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts.splice(index, 1);
    this.setState({ posts });
  }

  render() {
    return (<div className="App">
      <BlogForm addPost={this.addPost}/>
      <BlogList posts={this.state?.posts}
                editPost={this.editPost}
                deletePost={this.deletePost}/>
    </div>)
  }
}

export default App;
