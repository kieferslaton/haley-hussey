import React from 'react'
import {graphql, Link, useStaticQuery} from 'gatsby'
import sunflower from '../images/flower.png'

const MainMenu = () => {
    const data = useStaticQuery(graphql`
    query {
        wpgraphql {
          generalSettings{
            title
            url
          }
          menu(id: "bmF2X21lbnU6Mg==") {
            menuItems {
              nodes {
                id
                url
                label
              }
            }
          }
        }
      }
    `)

    const {title, url} = data.wpgraphql.generalSettings
    const items = data.wpgraphql.menu.menuItems.nodes.map(item => ({
        ...item,
        url: item.url.replace(url, "")
    }))
    return(
        <nav className="navbar navbar-light navbar-expand-md py-1">
            <Link to="/"><a className="navbar-brand"><span style={{zIndex: 1000}}>haley hussey</span><img src={sunflower} style={{height: 35, width: 35, margin: 0, padding: 0, position: 'relative', top: -3, left: 2, zIndex: -1000}}/></a></Link>
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar">
               <span class="icon-bar top-bar"></span>
               <span class="icon-bar middle-bar"></span>
               <span class="icon-bar bottom-bar"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbar">
            <ul className="navbar-nav text-center">
            {items.map(item => (
                <li className="nav-item my-0">
                <Link className="nav-link" to={item.url} key={item.id}>
                    {item.label.toLowerCase()}
                </Link>
                </li>
            ))}
            </ul>
            </div>
        </nav>
    )
}

export default MainMenu;