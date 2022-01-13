async function main() {
    assistant.depends.launch('plugin-recents-clear');

    if (assistant.app.isInstalled('com.netease.cloudmusic') == false)
        throw new Error("请先安装网易云音乐");

    assistant.app.run('com.netease.cloudmusic');
    assistant.accessibility.waitActivity('com.netease.cloudmusic/.activity.MainActivity');
    assistant.accessibility.wait({id: 'com.netease.cloudmusic:id/menu_icon', class: 'android.widget.ImageView'})[0].click();
    const buttonList = assistant.accessibility.wait({id: 'com.netease.cloudmusic:id/cloud_shell_red_text', class: 'android.widget.TextView', text: '签到'}, 3000);
    if (buttonList.length == 0) {
        assistant.app.toast('今日任务已经执行');
        assistant.app.run('cn.maizz.click');
        return;
    }
    buttonList[0].click();
}
assistant.main = main;
