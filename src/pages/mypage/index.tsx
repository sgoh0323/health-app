import { Space, Divider, List, AutoCenter } from 'antd-mobile';
import Layout from 'layout';
import { useEffect } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { menus } from 'router/menu';

const Mypage = ({ history }) => {
    const item = menus[location.pathname];
    useEffect(() => {
        console.log('item~~!!!!!!!!!!!');
        console.log(item);
    }, []);

    return (
        <Layout
            item={item}
            contents={
                <>
                    <AutoCenter>
                        <div style={{ fontSize: '1.5rem' }}>
                            09958님<span style={{ fontSize: '1rem' }}>(1958.01.01)</span>
                        </div>
                    </AutoCenter>
                    <Divider
                        style={{
                            color: 'gray',
                            borderColor: 'gray'
                            // borderStyle: 'dashed'
                        }}
                    />
                    <List header="계정설정">
                        <List.Item onClick={() => {}}>계정정보 설정</List.Item>
                        <List.Item
                            onClick={() => {
                                history.push('/changepwd');
                            }}>
                            비밀번호 설정
                        </List.Item>
                        <List.Item
                            onClick={() => {
                                history.push('/notisetting');
                            }}>
                            알림 설정
                        </List.Item>
                    </List>
                    <List header="도움">
                        <List.Item onClick={() => {}}>공지사항</List.Item>
                        <List.Item
                            onClick={() => {
                                history.push('/faq');
                            }}>
                            FAQ
                        </List.Item>
                        <List.Item onClick={() => {}}>문의하기</List.Item>
                        <List.Item onClick={() => {}}>버전정보</List.Item>
                        <List.Item onClick={() => {}}>개인정보 처리 방침</List.Item>
                        <List.Item onClick={() => {}}>로그아웃</List.Item>
                    </List>
                </>
            }
        />
    );
};

export default withRouter(Mypage);
