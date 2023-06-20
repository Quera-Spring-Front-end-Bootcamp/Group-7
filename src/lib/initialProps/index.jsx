import Cookies from 'js-cookie';
import { verifyAccessToken, getNewAccessToken, requestGetAttValues, requestGetBrands, requestGetAttribute, getProfile } from '../phonityClient';
import { fetchedAttValueDataCleaner, fetchedBrandsDataCleaner } from '../../../src/lib/phonityClient/dataCleaner';

//for detekting login and handling token
export const loginDetector = async (contextData) => {
	contextData.setIsLoading(true)
	const cookies = Cookies.get();
	if (cookies.authorization_refresh_token && cookies.authorization_access_token) {
		const verifyAccessTokenResult = await verifyAccessToken(cookies.authorization_access_token);
		if (verifyAccessTokenResult && verifyAccessTokenResult[0] === 200) {
			contextData.setLoginStatus({
				isLogin: true,
			});
		} else if (verifyAccessTokenResult[0] === 401) {
			const getNewAccessTokenResult = await getNewAccessToken(cookies.authorization_refresh_token);
			if (getNewAccessTokenResult && getNewAccessTokenResult[0] === 200) {
				Cookies.set('authorization_access_token', getNewAccessTokenResult[1].access);
				contextData.setIsLoading(false);
			} else {
				//handle other statuses
				contextData.setLoginStatus({
					isLogin: false,
				});
			}
		} else {
			//handle other statuses
			contextData.setLoginStatus({
				isLogin: false,
			});
		}
	} else {
		contextData.setLoginStatus({
			isLogin: false,
		});
	}
	contextData.setIsLoading(false);
};


export const getInitialValues = (contextData) => {
	if (!contextData.isDataFetched.isProfileFetched){
		// reqProfile(contextData);
	}
	if (!contextData.isDataFetched.isAttValuesFetched) {
		// getAttributes(contextData);
	}
	if (!contextData.isDataFetched.isBrandsFetched) {
		// getBrands(contextData);
	}
	// if (!contextData.isDataFetched.isAttributesFetched && (contextData.attributes.length !== 0)) {
	// 	getAttValue(contextData);
	// }
};
