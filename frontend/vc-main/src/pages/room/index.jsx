import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const RoomPage = () => {
    const { roomId } = useParams();

    const myMeeting = async (element) => {
        if (!element) return; // ✅ Ensure element exists before running

        const appID = 909545179;
        const serverSecret = "870dd1408b865e7eb26bc9f8ecb2bc54";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,
            Date.now().toString(), // ✅ Ensure timestamp is a string
            "Ananya Sharma"
        );

        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name : 'Copy Link',
                    url : ` http://localhost:3000/room/${roomId}`
                }
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton: true,
        });
    };

    return (
        <div>
            <div ref={myMeeting} />
        </div>
    );
};

export default RoomPage;
