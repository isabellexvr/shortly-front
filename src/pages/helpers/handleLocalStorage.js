import useUserInfo from "../../contexts/hooks/useUserInfo";

export default function handleLocalStorage(){

    const {userInfo, setUserInfo} = useUserInfo();

    if(userInfo === null){
        const isStored = checkStorage();
        if(isStored === null) {
            return false;
        }
        setUserInfo(isStored);
    } else {
        return userInfo
    }

}

function checkStorage(){
    const storageUserInfo = localStorage.getItem("userInfo");
    const storageToken = localStorage.getItem("token");

    if(!storageToken || !storageUserInfo){
        localStorage.removeItem("userInfo", "token");
        return null
    }

    return {
        userInfo: storageUserInfo,
        token: storageToken
    }
}