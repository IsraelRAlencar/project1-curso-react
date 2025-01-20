import './styles.css';
import { Component } from 'react';
import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 99
  };

  async componentDidMount() {
    const {page, postsPerPage} = this.state;
    const  postAndPhotos = await loadPosts();
    this.setState({ 
      posts: postAndPhotos.slice(page, postsPerPage),
      allPosts: postAndPhotos
    });
  }

  loadMorePosts = () => {
    const {
      page, postsPerPage, allPosts, posts
    } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  }

  render() {
    const { posts, page, postsPerPage, allPosts } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    return (
          <section className='container'>
            <Posts posts={posts}/>
            <div class="button-container">
              <Button text="Load more posts" onClick={this.loadMorePosts} disabled={noMorePosts}/>
            </div>
          </section>
        );
  }
}
