

const AdsListener =
{
	Name: "",
	beforeAdCallback: "",
	afterAdCallback: "",
	adViewedResultCallback: "",
	adBreakDoneCallback: "",
	adsBlockedCallback: ""
};

function SetAdsListener(GoogleAdsManager, beforeAd, afterAd, adViewedResult, adBreakDone, adsBlocked) {

	AdsListener.Name = GoogleAdsManager;
	AdsListener.beforeAdCallback = beforeAd;
	AdsListener.afterAdCallback = afterAd;
	AdsListener.adViewedResultCallback = adViewedResult;
	AdsListener.adBreakDoneCallback = adBreakDone;
	AdsListener.adsBlockedCallback = adsBlocked;
}


function ShowStartAd() {

	IsAdsRunning = false;
	if (FullScreenState == 0) {
		FullScreenExited();
	}

	if (ShouldExitNext) {

		//console.log("ShouldExitNext!!!");

		ManageScreen();
		ShouldExitNext = false;
	}
	
	// Check if Ad was displayed by google or not
	
}
function ShowNextAd() {
	ShowStartAd();
	
}
function ShowBrowseAd() {
	ShowStartAd();
	
}
function ShowPrerollAd() {

	IsAdsRunning = false;
	LoadUnityGame();
	
}

function CheckPrerollDone(){
	if (gameInstance != null)
	{
		gameInstance.SendMessage(PrerollListener.Name, PrerollListener.checkPreroll, PrerollDone? 1 : 0);
	}
}

function ShowPauseAd() {
	ShowStartAd();
	
}
function ShowRewardAd() {

	ShowStartAd();
}
