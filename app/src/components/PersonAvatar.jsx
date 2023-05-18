const PersonAvatar = ({ user }) => {
  return (
    <div className="w-12 h-12 relative">
      <img
        className="w-12 h-12 rounded-full mx-auto"
        src={
          user?.photoUrl
            ? user.photoUrl
            : "https://lh3.googleusercontent.com/fife/APg5EObeqwYpY_ozo98LUWXybXufC-3rbenor6eY_jvchgW68sCfjpK4RPPufAqUoMSWQPUyDyWaUwgjf7-LsewsFKeXtFC5cqQ4MmTKjNVZ-SzT5RrnM5WWV6aOXuicYSU8Yu2NYhhVYToMRwX_xWTcYmTNfzobNUpilNNX6z5WAZzKvv_FZGfWm-EMujTwZHOTGAeWvbRCGBikhdPJFfa2qzJnwW72vkDB03tpsuDXqYEQtjYhuvCZuK-cGbME2S8p0ECBKFY2Iv_WOTTCa3244dZpeXLQjv0gX1vuZDPVjXL580o2KM1rzg2pZ_4PrhNf8zdT0ObWSHbRTZSEBbkrFXxL0ejQ_zpPo47XH20FjrC6AYMIWCg-yEa2VX6V03pYkoZgRp9PAC_ot9j1GYS5RgHrWAJEb2P6HxEBM4s5e-qeo66UFr27mTNEpfrrUe_W-cxLrehTDwxlBPgJCsohUwiP3xmTe3nALjxtfwoJovv2cYC3ba2qY9dupMBCyTanl9pC5yC8dYKyBlOOpRsYkg3JNqOkYMoIN67-qDqiFH3kPmNFJ9YNYNOmTm6GkLzMP9Ce1kswsiwOAcycVqVRUQUtKjWq6QFczG-GGFrBIJozWHsboq2nQHSIQFceohuScKBpfkKdE-VB1T7Cmq53DUpPUwEmpaAMK3oOYBWNHUhiYy2gPgPZ9lvRJT4KUyAYwFojAZLnV8D5ceUsOTIn7kqJT2DxdUXQUnficFNO8nETBQGbLboMoSyMlEEku4r4zjDXpmlPJSa4wDovm6NIBe6GDvv9_SSR1TlPM3XOdiBP3xgyv32fI9sBExePn-PFFp2D603NcbvLxNgRdQImg1fUm3VcXKu-prX4ffZi0UGTYVGDpmLCCvrJCluc9qqK6o-_eAyWcV_r5lo_DLPTo_fv3lgp4JCNwa3Yj5rlvESJTpGm8a1ux3X0xe9UKZqYukd0HRi0iZTSl_gHtdLksgblMsPX9Dj7j3Rg6RNxwXpPKW8QMUm-nZdGSZhLBjv-jepha6R0fcmHPL92IXVihC1uCTnzC-RTmfoTq-oIE4621sGWRZLs663t7ZtkA2G_YSKdFgqxEqNUSPaFVk3_BJlvg3kisluWaN52FIxxXyr7f7Yp2WViBaTb1Hvqyx0Hh-t0f28SzZ0SF8dqFN9ENEiNWHisYIY0kWsqWGx7uEYPS4oObCisdtJQTA5ilFlzIkLtcHxUah7Fc3iu1nTjzgPmQZwQjcPYwuyueiM3Hs1GVX0k53C9NaxEEtluyaZAkSyyeY-FqrfPXqHAC1ZGc6yV4R_MU3b_egCpXljSAz4gZrEBJza60gMpy1mVpKBa08jvfVyN_fxXL6wxR8hyBJRbblSKmAZCWRKz8iXfdRel3sUPZR8pBCQLrTRDsIlKYEkvETJQUS2zc5Xmxpu8CNumW1UXU8roZEEUI9oB8OWI52FVYJEaGXilViFZRo81wbCNQkdzMi8qS0R1-X9zvL-V_XMSjQ7WPo6PdaU-0QOItfuVzb_7ztlYupK0SA=w2560-h1325"
        }
        alt="chat-user"
      />
      <span
        className={`absolute w-4 h-4 ${
          user.isOnline ? "bg-green-400" : "bg-gray-400"
        } rounded-full right-0 bottom-0 border-2 border-white`}
      ></span>
    </div>
  );
};

export default PersonAvatar;
