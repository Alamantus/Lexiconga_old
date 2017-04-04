import Inferno from 'inferno';
import Component from 'inferno-component';

export class Header extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <nav className='nav'>
        <div className='nav-left'>
          <a href='/' className='nav-item'>
            <img src='images/logo.svg' alt='Lexiconga' />
          </a>
        </div>

        <span class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>

        <div className='nav-right nav-menu'>
          <span className='nav-item'>
            <a className='button'>
              Login
            </a>
          </span>
          <span className='nav-item'>
            <a className='button'>
              About
            </a>
          </span>
        </div>
      </nav>
    );
  }
}
