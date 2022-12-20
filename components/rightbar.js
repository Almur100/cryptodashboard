import styles from "../styles/rightbar.module.css"
import Image from 'next/image'
import Currency from "./currency"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Rightbar(){
    return(
        <>
        <div className={styles.rightbar}>
            <div className={styles.rightbartop}>
                <div>12 Dec,2022</div>
                <div><NotificationsIcon/></div>
                <div> <Image src="/profile1.jpg" alt="img" width={27} height={27} className={styles.img}/>
                </div>
                <div>John Doe</div>
            </div>
            <div className={styles.div2}>
                <div className={styles.div2top}>
                    <div>Buy</div>
                    <div>Sell</div>
                </div>
                <div className={styles.div2bottom}>
                    <div className={styles.div2bottomleft}>
                        Currency

                    </div>
                    <div className={styles.div2bottomright}>
                        <div className={styles.box1}>
                            <div>
                            <Image src="/bitcoin.png" alt="img" width={18} height={18} />
                            </div>
                            <div>
                                Bitcoin
                            </div>
                        </div>
                        <div className={styles.box2}>
                            <div>BTC</div>
                            <div><ArrowDropDownIcon/></div>

                        </div>

                    </div>

                </div>
                <div className={styles.div2bottom}>
                    <div className={styles.div2bottomleft}>
                        Amount

                    </div>
                    <div className={styles.div2bottomright}>
                        <div className={styles.box1}>
                            <input type="text" placeholder="amount"/>
                            
                            
                        </div>
                        <div className={styles.box2}>
                            <div>USD</div>
                            <div><ArrowDropDownIcon/></div>

                        </div>

                    </div>

                </div>
                <div className={styles.div2bottom}>
                    <div className={styles.div2bottomleft}>
                        Crypto Amount

                    </div>
                    <div className={styles.div2bottomright}>
                        <div className={styles.box1}>
                            
                        <input type="text" placeholder="amount"/>
                        </div>
                        <div className={styles.box2}>
                            <div>BTC</div>
                            <div><ArrowDropDownIcon/></div>

                        </div>

                    </div>

                </div>
                <div className={styles.div3}>
                    <div>
                    Buy BTC
                    </div>

                </div>

            </div>
            <div className={styles.rightbarbottom}>
                <div className={styles.upper}>
                    <div>Explore Market</div>
                    <div className={styles.upperleft}>
                        <span>24H</span>
                        <span><ArrowDropDownIcon/></span>
                    </div>

                </div>
                {Currency.map((item)=>
                <div key={item.id} className={styles.lower}>
                    <div className={styles.lowerdiv1}>
                        <span> <Image src={item.img} alt="img" width={18} height={18} /></span>
                        <span>{item.nam1} </span>
                        <span>{item.nam2}</span>

                    </div>
                    <div className={styles.lowerdiv2}>
                    {item.price}

                    </div>
                    <div className={styles.lowerdiv3}>
                        {item.change}

                    </div>

                </div>
                )}

            </div>

        </div>
        </>
    )
}