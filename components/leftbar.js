import styles from "../styles/leftbar.module.css"
import Image from 'next/image'
import DashboardIcon from '@mui/icons-material/Dashboard';
import WalletIcon from '@mui/icons-material/Wallet';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import FeedIcon from '@mui/icons-material/Feed';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import PeopleIcon from '@mui/icons-material/People';


export default function Leftbar(){
    return(
        <>
        <div className={styles.leftbar}>
        <div className={styles.leftbartop}>
            <Image src="/logo.jpg" alt="img" width={50} height={50}/>

        </div>
        <div className={styles.leftbarbottom}>
            <a><div><DashboardIcon/></div> <div>Dashboard</div></a>
            <a><div><WalletIcon/></div><div>Wallet</div></a>
            <a><div><AnalyticsIcon/></div><div>Analytics</div></a>
            <a><div><AccountBalanceIcon/></div><div>Transactions</div></a>
            <a><div><FeedIcon/></div><div>News</div></a>
            <a><div>Others</div></a>
            <a><div><SettingsIcon/></div><div>Settings</div></a>
            <a><div><HelpIcon/></div><div>Help</div></a>
            <a><div><PeopleIcon/></div><div>Community</div></a>

        </div>
        </div>
        </>
    )
}