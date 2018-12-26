import { IMenuItem } from '@/components/BASE/MENU';

export const MENU: IMenuItem[] = [
	{
		title: "test",
		icon: "setting",
		path: "/",
		children: [
			{
				title: "ctest",
				icon: "setting",
				path: "/about/"
			}
		]
	},
	{
		title: "index",
		icon: "setting",
		path: "/"
	},
	{
		title: "index",
		icon: "setting",
		path: "/about"
	}
]
