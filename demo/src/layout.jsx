import React from 'react';
import SideNav, { MenuIcon } from '../../src/index.jsx';


let Layout = React.createClass({
  getInitialState() {
    return {
      showNav1: false,
      showNav2: false,
      showNav3: false,
      showNav4: false,
    }
  },


  getStyle() {

    let styles = {
      exampleWrapper: {
        textAlign: 'center',
      },
      exampleBox: {
        textAlign: 'left',
        maxWidth: 500,
        width: '90%',
        margin: '32px 12px',
        display: 'inline-block',
      },
      topBar: {
        background: '#0ac',
        color: '#fff',
        fontSize: '14px',
      },

      codeWrap: {
        background: '#f5f5f5',
        whiteSpace: 'pre',
        overflow: 'scroll',
        height: 300,
      },
      bg1: {
        backgroundColor: '#e91e63',
      },
      bg2: {
        backgroundColor: '#4CAF50',
      },
      bg3: {
        backgroundColor: '#2196F3',
      },
      menuIcon: {
        padding: 12,
        verticalAlign: 'middle',
      },
    }
    return styles;
  },


  render() {
    let styles = this.getStyle();
    return (
      <div>
        <div style={{width: '100%', background: '#0AC', color: '#fff'}}>
          <MenuIcon onClick={()=>this.setState({showNav1: true})} style={{verticalAlign: 'middle', padding: '12px'}}/>
          Demo [react-simple-sidenav]
        </div>


        <div style={styles.exampleWrapper}>
          <div style={styles.exampleBox}>
            <div style={Object.assign({}, styles.topBar, styles.bg1)}>
              <div className='ripple'><MenuIcon style={styles.menuIcon} onClick={()=>this.setState({showNav1: true})}/></div>
              Demo 1 [with default styles]
            </div>
            <div style={styles.codeWrap}><code>{example1}</code></div>
          </div>

          <div style={styles.exampleBox}>
            <div style={Object.assign({}, styles.topBar, styles.bg2)}>
              <div className='ripple delay-1'>
                <MenuIcon style={styles.menuIcon} onClick={()=>this.setState({showNav2: true})}/>
              </div>
              Demo 2 [with custom styles]
            </div>
            <div style={styles.codeWrap}><code>{example2}</code></div>
          </div>

          <div style={styles.exampleBox}>
            <div style={Object.assign({}, styles.topBar, styles.bg3)}>
              <div className='ripple delay-2'>
                <MenuIcon style={styles.menuIcon} onClick={()=>this.setState({showNav3: true})}/>
              </div>
              Demo 3 [with custom items]
            </div>
            <div style={styles.codeWrap}><code>{example3}</code></div>
          </div>
        </div>


        <SideNav
          showNav={this.state.showNav1}
          onHideNav={()=>this.setState({showNav1: false})} />

        <SideNav
          showNav={this.state.showNav2}
          onHideNav={()=>this.setState({showNav2: false})}
          title='Hello World'
          titleStyle={{backgroundColor: '#4CAF50'}}
          items={['home', 'services', 'about', 'contact']}
          itemStyle={{backgroundColor: '#fff'}}
          itemHoverStyle={{backgroundColor: '#CDDC39'}} />

        <SideNav
          showNav={this.state.showNav3}
          onHideNav={()=>this.setState({showNav3: false})}
          title={<div>Hello octo <img src='git-mark.png' width='26'/></div>}
          titleStyle={{backgroundColor: '#2196F3'}}
          items={[
            <a target='_blank' href='https://github.com/gauravchl/react-simple-sidenav'>View Source on github</a>,
            <a target='_blank' href='https://www.npmjs.com/package/react-simple-sidenav'>Install via npm</a>,
            <a target='_blank' href='https://gauravchl.github.io/react-simple-sidenav/example'>demo</a>,
            ]} />


      </div>
    )
  },
})


export default Layout

const example1 = `
  import react from 'react';
  import SideNav, {MenuIcon} from 'react-simple-sidenav';

  React.createClass({
    render() {
      return(
        <MenuIcon onClick={() => this.setState({showNav: true})}/>

        <SideNav
          showNav = {this.state.showNav}
          onHideNav = {() => this.setState({showNav: false})} />
      )
    }
  })
`


const example2 = `
  <SideNav
    showNav        =  {this.state.showNav}
    onHideNav      =  {() => this.setState({showNav: false})}
    title          =  "Hello World"
    items          =  {['home', 'services', 'about', 'contact']}
    titleStyle     =  {{backgroundColor: '#4CAF50'}}
    itemStyle      =  {{backgroundColor: '#fff'}}
    itemHoverStyle =  {{backgroundColor: '#CDDC39'}}
    />

`


const example3 = `
  <SideNav
    showNav={this.state.showNav3}
    onHideNav={()=>this.setState({showNav3:false})}
    title={<div>Hello octo <img src='git-mark.png' width='26' /></div>}
    titleStyle={{backgroundColor: '#2196F3'}}
    items={[
      <a target='_blank' href='https://github.com/gauravchl/react-simple-sidenav'>View Source on github</a>,
      <a target='_blank' href='https://www.npmjs.com/package/react-simple-sidenav'>Install via npm</a>,
      <a target='_blank' href='https://gauravchl.github.io/react-simple-sidenav/example'>demo</a>
      ]} />

`
