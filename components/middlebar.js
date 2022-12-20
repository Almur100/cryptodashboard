import styles from "../styles/middlebar.module.css"
import Image from 'next/image'
import Trade from "./trade"
import userData from "./data";
import SearchIcon from '@mui/icons-material/Search';
import {Bar} from "react-chartjs-2";
import { useState } from "react";
import { Chart as ChartJS} from "chart.js/auto";

export default function Middlebar() {
    const[userdata,setuserdata] = useState({
        labels:userData.map((item)=> item.year),
        datasets:[{
            label:"price",
            data:userData.map((item)=>item.price),
        }]

        
    })
    return (
        <>
            <div className={styles.middlebar}>
                <div className={styles.middlebartop}>
                    <div className={styles.topleft}>
                        <input
                            type="text" placeholder="Search cryptocurrency">
                        </input>
                    </div>
                    <div className={styles.topright}><SearchIcon/></div>
                </div>
                <div className={styles.div2}>
                    <div className={styles.div2left}>
                        <div className={styles.coin}>
                            <Image src="/bitcoin.png" alt="img" width={50} height={50} />

                        </div>
                        <div className={styles.price}>
                            <div>Available Bitcoin(BTC)</div>
                            <div>0.0143227 BTC ($1022)</div>

                        </div>

                    </div>
                    <div className={styles.div2left}>
                        <div className={styles.coin}>
                            <Image src="/ethereum.png" alt="img" width={50} height={50} />

                        </div>
                        <div className={styles.price}>
                            <div>Available Ethereum(ETH)</div>
                            <div>0.0113227 ETH ($622)</div>

                        </div>


                    </div>

                </div>
                <div className={styles.div3}>
                    <Bar data={userdata}/>

                </div>
                <div className={styles.div4}>
                    <div className={styles.div4div1}>
                        <div className={styles.div4div1left}>
                            Trade History

                        </div>
                        <div className={styles.div4div1right}>
                            <span>1M</span>
                            <span>1Y</span>
                            <span>ALL</span>

                        </div>

                    </div>
                    <div className={styles.div4div2}>
                        <div>#</div>
                        <div>Name</div>
                        <div>Value</div>
                        <div>Date</div>
                        <div>Transaction ID</div>
                        <div>Status</div>

                    </div>
                    {Trade.map((item) =>
                        <div key={item.id} className={styles.div4div3}>
                            <div>{item.id}</div>
                            <div className={styles.bitcon}>
                                <div>   <Image src={item.image} alt="img" width={15} height={15} />
                                </div>
                                <div>{item.name}</div>
                            </div>
                            <div> {item.value}</div>
                            <div>{item.date}</div>
                            <div>{item.tid}</div>
                            <div className={styles.recived}>{item.status}</div>

                        </div>
                    )}

                </div>

            </div>

        </>
    )
}