import * as React from 'react';

import { Icon, Menu } from 'antd';
import { Link } from "react-router-dom"

const { SubMenu } = Menu;

import { MENU } from '@/app/routing';

export interface IMenuItem {
	title: string;
	icon: string;
	path: string;
	children?: IMenuItem[];
}

export interface IProps {
	active?: string;
	menu?: IMenuItem[];
}

export default class MenuComponent extends React.Component<IProps, object> {

	constructor(props: IProps) {
		super(props);
	}

	public render() {
		return (
			<div>
				<Menu
					style={{ width: 256 }}
					defaultSelectedKeys={['1']}
					defaultOpenKeys={['sub1']}
					mode={'inline'}
					theme={'light'}>
					{this.getMenu(MENU)}
				</Menu>
			</div>
		)
	}

	private getMenu(menu: IMenuItem[]) {
		return menu.map((item, index) => {
			if (item.children && item.children.length) {
				return (
					<SubMenu key={index} title={<span><Icon type={item.icon} /><span>{item.title}</span></span>}>
						{this.getMenu(item.children)}
					</SubMenu>
				)
			}
			return (
				<Menu.Item key={index}>
					<Link to={item.path}><Icon type={item.icon} />{item.title}</Link>
				</Menu.Item>
			)
		})
	}
}
