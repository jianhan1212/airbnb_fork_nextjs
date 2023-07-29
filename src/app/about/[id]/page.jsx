import React from 'react'
import styles from './page.module.css'

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.mainTitle}>
          <div className={styles.downTitle}>
            <section>
              <div className={styles.topTitle}>
                <h1>@墾丁沛那海『雙人獨棟包棟泳池Villa』蜜月-結婚週年-特殊紀念日-可烤肉.浴缸+家庭劇院-秘密藍</h1>
              </div>
              <div className={styles.bottomTitle}>
                <div className={styles.left}>
                  <div>
                    <span>
                      <span>*</span>
                      <span>5.0</span>
                      <span>
                        <button>4則評價</button>
                      </span>
                    </span>
                  </div>
                  <div>
                    <span>超讚房東</span>
                  </div>
                  <div>
                    <span>
                      <button>恆春鎮．台灣</button>
                    </span>
                  </div>
                </div>
                <div className={styles.right}>
                  <div className={styles.share}>分享</div>
                  <div className={styles.like}>儲存</div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page