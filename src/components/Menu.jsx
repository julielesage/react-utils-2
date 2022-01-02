import { Link } from "react-router-dom";
import { lessons } from "../constants/menu";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


function Menu() {
	//TODO:
	const toggleMenu = () => console.log("show menu");

	return (
		<aside className="menu">
			<List disablePadding dense>
				{lessons.map(link => {
					return (
						<Link to={`/${link}`} key={link}>
							<ListItem button>
								<ListItemText>{link}</ListItemText>
							</ListItem>
						</Link>
					)
				})}
			</List>
		</aside >
	);

};

export default Menu;