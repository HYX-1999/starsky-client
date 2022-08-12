/*
 * @Description: AccountCard
 * @Author: hyx
 * @Date: 2022-08-11 16:26:44
 */

import React from "react"
import Card from "@/components/Card"
import IcoBtn from "./icoBtn"
import { useAccount } from "./useAccount"
import $style from "./index.scss"

const AccountCard = () => {
  const accounts = useAccount()

  return (
    <Card className={$style.card}>
      {accounts.map(({ link, ico }, index) => (
        <IcoBtn link={link} key={index}>
          {ico}
        </IcoBtn>
      ))}
    </Card>
  )
}

export default AccountCard
