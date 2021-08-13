import 'antd/dist/antd.css';
import '../index.css';
import styled from 'styled-components';
import {Layout} from 'antd';
import Navbar from "../components/Navbar";
import {NavBtnLink} from "../components/Navbar/NavbarElements";

const {Content, Footer} = Layout;
const Header = styled.div`
    width: 100%;
    background: white;
    display: flex;
    justify-content: space-between;
`;

const NavSep = styled.div`
    width: 220px;
    display: flex;
    align-items: center;
`
const Banner = styled.div`
    height: 30%;
    background-color: white;
    padding: 25px 0;
    margin-left: 30px;
`
const Profile = styled.div`
    height: 30%;
    background-color: pink;
    padding: 25px 0;
`

const Home = () => {
    return (
        <Layout className="layout" style={{width: '100%', height: '100%'}}>
            <Header>
                <NavSep>
                    <div className="logo"/>
                </NavSep>
                <Navbar/>
                <NavSep style={{justifyContent: 'flex-end'}}>
                    <input type="button" className="profile"/>
                </NavSep>
            </Header>
            <Content className="contents" >
                <Banner>
                    <div className="logo_big"/>
                    <div className="slogan"><b>목적</b>을 위해 <b>목표</b>를 세우는 사람들</div>
                </Banner>
                <Profile>

                </Profile>
                <div className="site-layout-content">Content</div>
            </Content>
            <Footer style={{textAlign: 'center'}}>NED TimerProject ©2021 Created by NED</Footer>
        </Layout>
    );
}

export default Home;