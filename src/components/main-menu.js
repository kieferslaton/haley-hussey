import React from 'react'
import {graphql, Link, useStaticQuery} from 'gatsby'

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
        <nav className="navbar navbar-light navbar-expand-md">
            <Link to="/"><a className="navbar-brand">haley hussey</a></Link>
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar">
               <span class="icon-bar top-bar"></span>
               <span class="icon-bar middle-bar"></span>
               <span class="icon-bar bottom-bar"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbar">
            <ul className="navbar-nav text-center">
            {items.map(item => (
                <li className="nav-item">
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