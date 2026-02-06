import React from 'react';
import type { MenuProps } from 'antd';
import { Col, ConfigProvider, Flex, Menu, Row, Space, Typography } from 'antd';
// import { createStyles } from 'antd-style';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const { Title } = Typography;

// const useStyles = createStyles(({ token }) => ({
//     navigationPopup: {
//         padding: token.padding,
//         maxWidth: 480,
//         background: token.colorBgElevated,
//         borderRadius: token.borderRadiusLG,
//         boxShadow: token.boxShadowSecondary,
//     },
//     menuItem: {
//         borderRadius: token.borderRadius,
//         transition: `all ${token.motionDurationSlow}`,
//         cursor: 'pointer',
//         '&:hover': {
//             background: 'rgba(0, 0, 0, 0.02)',
//         },
//     },
//     menuItemSpace: {
//         padding: token.paddingSM,
//     },
//     leadingHeader: {
//         margin: '0 !important',
//         paddingBottom: token.paddingXS,
//         borderBottom: `1px solid ${token.colorSplit}`,
//     },
//     marginLess: {
//         margin: '0 !important',
//     },
// }));

const MenuItem = ({ title }: { title: string; }) => {
    return (
        <div className="menu-item">
            <Space vertical size={4} className="menu-item-space">
                <Title level={5} className="margin-less">
                    {title}
                </Title>

                {/* <div className="menu-item-description">
                    <Paragraph type="secondary" className="margin-less">
                        {description}
                    </Paragraph>
                </div> */}
            </Space>
        </div>
    );
};

const menuItems = [
    {
        key: 'home',
        label: 'Home'
    },
    {
        key: 'heroes',
        label: 'Heroes'
    },
    {
        key: 'test',
        label: 'Test'
    },
    {
        key: 'features',
        label: 'Features',
        children: [
            {
                key: 'getting-started',
                label: (
                    <MenuItem title="Getting Started" />
                ),
            },
            {
                key: 'components',
                label: <MenuItem title="Components" />,
            },
            {
                key: 'templates',
                label: <MenuItem title="Templates" />,
            },
        ],
    },
    {
        key: 'resources',
        label: 'Resources',
        children: [
            {
                key: 'blog',
                label: <MenuItem title="Blog" />,
            },
            {
                key: 'community',
                label: <MenuItem title="Community" />,
            },
        ],
    },
];

function Navbar() {
    const navigate = useNavigate();

    const popupRender: MenuProps['popupRender'] = (_, { item }) => {
        return (
            <Flex className="navigation-popup" vertical gap="middle">
                <Typography.Title level={3} className="leading-header">
                    {item.title}
                </Typography.Title>

                <Row gutter={16}>
                    {React.Children.map(item.children as React.ReactNode, (child) => {
                        if (!React.isValidElement(child)) {
                            return null;
                        }
                        return (
                            <Col span={12} key={child.key}>
                                {child}
                            </Col>
                        );
                    })}
                </Row>
            </Flex>
        );
    };

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        switch (e.key)
        {
            case 'home':
                navigate('/'); break;
            case 'heroes':
                navigate('/heroes'); break;
            case 'test':
                navigate('/test'); break;

            default:
                break;
        }
    };

    return (
        <ConfigProvider
            theme={{
                components: {
                    Menu: {
                        darkItemBg: '#302f30ff',
                        darkItemColor: '#fdfdfdff',
                        darkItemHoverBg: '#616161ff',
                        darkItemSelectedBg: '#302f30ff',
                        darkItemSelectedColor: '#fdfdfdff',
                    },
                    Typography: {
                        titleMarginBottom: 0,
                        titleMarginTop: 0,
                    },
                },
            }}
        >
            <div className="header-container">
                <div className="header-content">
                    <Menu
                        mode="horizontal"
                        items={menuItems}
                        popupRender={popupRender}
                        onClick={handleMenuClick}
                        theme='dark'
                        className="header-menu"
                    />
                </div>
            </div>
        </ConfigProvider>
    );
}

export default Navbar
