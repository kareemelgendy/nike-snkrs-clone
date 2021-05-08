import styled from "styled-components";

const Menu = () => {
  var links = document.querySelectorAll("#page");

  function setActive(page) {
    for (var i = 0; i < links.length; i++) {
      if (links[i] === page) {
        page.classList.toggle("active");
      } else {
        links[i].classList.remove("active");
      }
    }
  }

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
      setActive(this);
    });
  }

  return (
    <Container>
      <Header>
        <div className="user">
          <img id="profile-pic" src="/images/profile-pic.png" alt="" />
          <span>Michael Jordan</span>
        </div>
        <div className="info">
          <a href="/">Help</a>
          <img src="/images/cart-icon.svg" alt="" />
        </div>
        <div className="location">
          <img src="/images/location-icon.svg" alt="" />
          <span id="country">Canada</span>
        </div>
      </Header>
      <Navbar>
        <a id="logo" href="/">
          <img id="logo" src="/images/logo.svg" alt="logo" />
        </a>
        <ul className="nav">
          <li id="page">
            <a href="/">Feed</a>
          </li>
          <li id="page">
            <a href="/">In Stock</a>
          </li>
          <li id="page">
            <a href="/">Upcoming</a>
          </li>
        </ul>
        <img id="grid-icon" src="/images/grid-sm.svg" alt="logo" />
      </Navbar>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const Header = styled.div`
  height: 40px;
  width: 100%;
  border-bottom: 1px solid lightgrey;
  line-height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 12px;
  color: #757575;

  img {
    margin-left: 15px;
  }

  a {
    text-decoration: none;
    color: #757575;
  }

  #profile-pic {
    height: 28px;
  }

  .user {
    display: flex;
    align-items: center;
    position: relative;
    margin: 0 20px;

    #profile-pic {
      margin: 0 10px;
    }
  }

  .info {
    display: flex;
    align-items: center;
  }

  .location {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  }
`;

const Navbar = styled.div`
  height: 57px;
  width: 100%;
  border-bottom: 1px solid lightgrey;
  line-height: 57px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  position: relative;

  #logo {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    margin: 0 20px;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;

    li {
      margin-left: 20px;
      margin-right: 20px;

      a {
        text-decoration: none;
        color: black;
      }

      &:hover,
      .active {
        border-bottom: 2px solid black;
        cursor: pointer;
      }
    }
  }

  #grid-icon {
    position: absolute;
    right: 20px;
  }
`;

export default Menu;
