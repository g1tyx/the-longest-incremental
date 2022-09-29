/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "You've beaten the game... for now, at least.": "你赢了比赛……至少现在是这样。",
    "Zoooooom Out!": "放放放放放放大！",
    "Welcome!": "欢迎!",
    "Cost: ": "成本: ",
    "Credits": "鸣谢",
    "Automate Buildings.": "自动化建筑。",
    "Welcome to the Longest Incremental!": "欢迎来到最长增量！",
    "What Comes Next?": "接下来是什么？",
    "Where's my Infinity?": "我的无限在哪里？",
    "Upgrades": "升级",
    "You can find more detailed mode info in Stats -> Modes (but only for the mode you're on)": "您可以在 统计 -> 模式 中找到更详细的模式信息（但仅适用于您所在的模式）",
    "x (additive)": "x (附加)",
    "x pre-Darken speed": "x 预变暗速度",
    "Unused:": "未使用:",
    "Unlock Challenges.": "解锁挑战。",
    "Total Recalls:": "总召回：",
    "Trade!": "贸易！",
    "Unlock boosters.": "解锁助推器。",
    "Unlock Building 4: Factory.": "解锁建筑 4：工厂。",
    "Unlock Dark World.": "解锁黑暗世界。",
    "Try a Harder Mode": "尝试更难的模式",
    "Unlock Challenges. Reward: Get +10% more Dark Resources.": "解锁挑战。 奖励：获得+10% 的黑暗资源。",
    "Unlock Consumption and the Dark World.": "解锁消耗和黑暗世界。",
    "Unlock Dark Alloying.": "解锁黑暗合金。",
    "Upgrades don't spend Points.": "升级不消耗点数。",
    "Medium": "中等",
    "Meta": "元",
    "Modes": "模式",
    "Multiplied!": "倍增！",
    "Next": "下一个",
    "Music": "音乐",
    "Music (All original)": "音乐（全部原创）",
    "Noob": "菜鸟",
    "Easy": "简单",
    "Hard": "困难",
    "Open Auto": "打开自动",
    "Load": "加载",
    "Lightspeed": "光速",
    "Is this even useful?": "这还有用吗？",
    "Inverted": "倒置",
    "Large Production": "大生产",
    "Layers:": "层:",
    "Loading... (this shouldn't take more than 5 hours)": "正在加载...（这不应超过 5 小时）",
    "Main": "主界面",
    "Make it shiny!": "让它闪亮！",
    "Maker:": "制造商：",
    "Mode Descriptions": "模式说明",
    "Mass Production": "量产",
    "Misc": "杂项",
    "For experienced players. Requires large amounts of strategy, skill,\n          and time.": "对于有经验的玩家。 需要大量的策略、技巧、\n 和时间。",
    "For less experienced players. Requires strategy and time.": "对于经验不足的玩家。 需要策略和时间。",
    "For players new to incrementals. No strategy required. This is the\n        simplest gamemode.": "对于刚接触增量的玩家。 无需策略。 这是\n 最简单的游戏模式。",
    "For players who somewhat have a feel for incremental games. Requires\n        some time.": "适合对增量游戏有一定感觉的玩家。 需要\n一些时间。",
    "Fuse!": "保险丝！",
    "Each layer consists of unique features and automates prior layers.": "每一层都由独特的功能组成，并自动执行之前的层。",
    "This game and its mechanics are in the public domain.": "该游戏及其机制属于公共领域。",
    "This game is currently consists of 2 layers and 6 features.": "该游戏目前由 2 层和 6 个功能组成。",
    "Solar Flare": "太阳耀斑",
    "Spacetime Foam": "时空泡沫",
    "Select the difficulty that's best for you.": "选择最适合您的难度。",
    "Be prepared. This is a long hike.": "做好准备。 这是一次漫长的徒步旅行。",
    "Precious...": "宝贵的...",
    "Producer:": "生产商：",
    "Producer: Starts at ": "生产商：开始于",
    "Reach 10.0 Sp points with only 1 maker. Reward: Gain +10% more Points. (additive)": "仅使用 1 个制造商 达到 10.0 Sp 点数。 奖励：获得 +10% 更多点数。 （附加）",
    "Be aware that most features are strategic for Hard mode.": "请注意，大多数功能对于困难模式都是战略性的。",
    "What, 5 hours have passed and you still haven't loaded?! Refresh and wait\n      for it to load :troll:": "什么，5小时过去了，你还没有加载好？！ 刷新并等待\n 加载：troll:",
    "Buildings and Point Upgrades don't spend anything.": "建筑和点升级不花费任何东西。",
    "buildings, double production.": "建筑物，双倍生产。",
    "Buy a Booster. Reward: Permanently keep Upgrade 3.": "购买助推器。奖励：永久保持升级3。",
    "Buy a Factory.": "买工厂。",
    "Buy a Generator.": "购买发生器。",
    "Buy a Maker.": "购买一个制造商。",
    "Buy a Producer.": "购买生产商。",
    "Buy Upgrade 5": "购买升级 5",
    "By darkening the sun...": "通过使太阳变暗...",
    "Challenged": "挑战",
    "Challenges": "挑战",
    "Challenges don't work like that...": "挑战不是这样的……",
    "Channel 1": "频道 1",
    "Channel 2": "频道 2",
    "Check the Discord server to see if there are more updates!": "检查 Discord 服务器，看看是否有更多更新！",
    "Click and hold to see the mode changes.": "单击并按住以查看模式更改。",
    "Click outside or the X button to close this modal.": "单击外部或 X 按钮关闭此模式。",
    "Cold Dark Matter": "冷暗物质",
    "Compact (by DeLorean)": "紧凑（DeLorean）",
    "Compact v0.26.1 (by DeLorean)": "Compact v0.26.1（DeLorean 提供）",
    "Complete 15 total challenges.": "完成 15 个挑战。",
    "Confirmations": "确认",
    "Congratulations! You have reached the end!": "恭喜！你已经到了终点！",
    "Consume": "消耗",
    "Consumption": "消耗",
    "Consumption does not take away effective Boosters.": "消耗不会带走有效的助推器。",
    "Consumption level:": "消费水平：",
    "Consumption reduces effective Boosters linearly. (previously it was quadratic)": "消耗会线性减少有效的助推器。 （以前是二次的）",
    "Coolant": "冷却液",
    "Coolant ->": "冷却液 ->",
    "CoolRadGamer": "CoolRadGamer",
    "Creator Power": "创造者力量",
    "Creator:": "创作者：",
    "Creator: Starts at ": "创建者：开始于",
    "Crong (by CRG)": "Crong (镇 CRG)",
    "Crystallized": "结晶的",
    "Currently: ": "当前：",
    "DaBlueTurnip09": "大蓝萝卜09",
    "Dark": "黑暗",
    "Dark\n          Energy": "黑暗\n能量",
    "Dark Booster": "黑暗助推器",
    "Dark Booster ->": "黑暗助推器 ->",
    "Dark Booster +": "黑暗助推器 +",
    "Dark Charge": "黑暗冲锋",
    "Dark Charge ->": "黑暗冲锋 ->",
    "Dark Charge +": "黑暗冲锋 +",
    "Dark Energy": "暗能量",
    "Dark Energy\n          (+": "暗能量\n (+",
    "Dark Fuel": "黑暗燃料",
    "Dark Machine (by dudat0507, VERY WIP)": "黑暗机器（由 dudat0507 提供，非常 WIP）",
    "dark matter.": "暗物质。",
    "Dark Recall:": "黑暗回忆：",
    "Dark Resources:": "黑暗资源：",
    "Dark Stardust": "黑暗星尘",
    "Dark Steel": "黑钢",
    "Dark Steel ->": "黑钢 ->",
    "Dark Toning 2 is changed to: Multiply all Buildings at same rate.": "暗色调 2 更改为：以相同的速率乘以所有建筑物。",
    "Dark Toning 4 is free, and always at maximum.": "Dark Toning 4 是免费的，并且始终是最大的。",
    "Dark Tonings.": "黑暗色调。",
    "Dark World": "黑暗的世界",
    "Dark, Darker, Even Darker": "黑暗，更黑暗，甚至更黑暗",
    "Darken": "变暗",
    "Darken in 1 minute. Reward: Get +10% more Timewarp Power.": "1分钟变暗。奖励：获得 +10% 更多时间扭曲力量。",
    "Darken in Challenges.": "在挑战中变暗。",
    "Darken resets.": "暗重置。",
    "Darken runs.": "黑暗奔跑。",
    "Darken the Sun twice.": "使太阳变暗两次。",
    "Darken the sun.": "使太阳变暗。",
    "Darken the Sun. Reward: Permanently keep Max All.": "使太阳变暗。奖励：永久保留 Max All。",
    "Darken with 25 boosters or less. Reward: Get +10% more Timewarp Power.": "使用 25 个或更少的助推器变暗。奖励：获得 +10% 更多时间扭曲力量。",
    "Default (by jwklong + TehAarex)": "默认（通过 jwklong + TehAarex）",
    "DeLorean": "德洛林",
    "Developers": "开发者",
    "Difficulty:": "困难：",
    "Dim": "暗淡",
    "Discord": "不和谐",
    "Discord Light Mode": "不和谐灯光模式",
    "Display": "展示",
    "Double Maker generation.": "双创客一代。",
    "Download": "下载",
    "downvoid": "下空",
    "Each recall is based on its resource. Points boost Point Recall, Dark\n          Energy boosts Energy Recall, and Dark Matter boosts Dark Recall.": "每次召回都基于其资源。点数提升点召回率，暗能量提升能量召回率，暗物质提升黑暗召回率。",
    "Easy Changes": "轻松更改",
    "Electronium": "电子",
    "Electronium ->": "电子->",
    "Energy Recall:": "能量召回：",
    "Enhance 20 times in total. Reward: Gain +10% more Points. (additive)": "总共提升20次。奖励：获得 +10% 更多点数。 （添加剂）",
    "Enhance a building 9 times.": "将建筑物强化 9 次。",
    "Enhance a building twice.": "强化建筑两次。",
    "Enhance boost:": "增强提升：",
    "Enhance boost: Increase the base by": "增强提升：增加基础",
    "Enhancement": "增强",
    "Enhancements are 25% cheaper.": "增强功能便宜 25%。",
    "Enhancing is 25% cheaper.": "增强功能便宜 25%。",
    "Essence": "本质",
    "Extreme Dark": "极黑",
    "Factory Enhances are 20% cheaper.": "工厂增强功能便宜 20%。",
    "Factory production is multiplied by Boosters.": "工厂产量乘以助推器。",
    "Factory:": "工厂：",
    "Factory: Starts at ": "工厂：开始于",
    "Features:": "特征：",
    "FlamemasterNXF": "火焰大师NXF",
    "For every": "给大家",
    "forward": "向前",
    "Fusing will lose resources needed, and will gain products in\n          exchange.": "融合将失去所需的资源，并会获得\n交换的产品。",
    "Gain 3x more Points.": "获得 3 倍以上的点数。",
    "Gain 5x more Points and 3x more Dark Energy.": "获得 5 倍以上的点数和 3 倍以上的暗能量。",
    "Gain more Dark Resources based on highest Dark Energy.": "根据最高的暗能量获得更多的暗资源。",
    "Gain more Points based on Dark Matter.": "根据暗物质获得更多点数。",
    "Gain more points based on total buildings bought.": "根据购买的建筑总数获得更多点数。",
    "Gain more points based on total Enhances.": "根据总增强获得更多点数。",
    "Gain more points based on your points.": "根据您的点数获得更多点数。",
    "Generator:": "发生器：",
    "Achievements:": "成就:",
    "Booster resets.": "助推器重置。",
    "One and Only One": "一个且只有一个",
    "One with the Dark": "与黑暗合一",
    "Googol Points!": "古戈尔点数！",
    "Resources to exchange:": "资源交换：",
    "LOCKED": "未解锁",
    "Self-Productive": "自生产",
    "Solar Flare +": "太阳耀斑 +",
    "Start.": "开端。",
    "STARTING WILL DARKEN THE SUN WITH NO REWARDS!": "开始将使太阳变黑，没有任何回报！",
    "Stats": "统计",
    "Stopped": "已停止",
    "Strange Stardust": "奇异星尘",
    "The 25th Achievement!": "第25个成就！",
    "The Naming System Feels Arbitrary": "命名系统让人感觉很随意",
    "The 9th achievement doesn't exist": "第9个成就不存在",
    "The 35 Booster milestone still exists.": "35 助推器里程碑仍然存在。",
    "The Summit": "峰会",
    "Theme:": "主题:",
    "The Darkness": "黑暗",
    "Get all 7 Point Upgrades.": "获得全部 7 个点数升级。",
    "Get 99 factories.": "获得99个工厂。",
    "Get 100 Time Crystals. Reward: Get +10% more Timewarp Power.": "获得100个时间水晶。 奖励：获得 +10% 更多时间扭曲力量。",
    "Get 99 Makers. Reward: Makers produce +9% points faster.": "获得 99 个制造商。 奖励：制造商更快生产 +9% 点数。",
    "Get a Booster with under 10 of each Building, with the exception of Producers. Reward: Gain +10% more Points. (additive)": "获得一个助推器，每个建筑少于10个(除了生产者)。奖励:获得+10%的点数。(附加)",
    "Gogol Points": "古戈尔点数",
    "Icon:": "图标:",
    "Import File": "导入文件",
    "Max Consume": "最大消耗",
    "meta": "元",
    "Point Recall:": "点数召回：",
    "Game saved": "游戏已保存",
    "Recall": "召回",
    "The long hike is over. If you didn't use a guide, you are a no-lifer.": "漫长的徒步旅行结束了。 如果您没有使用指南，那么您就是无生命者。",
    "Save successfully copied to clipboard.": "存档已成功复制到剪贴板。",
    "Requires fusion": "需要融合",
    "\n            Goal:": "\n 目标：",
    "\n          You have a total of": "\n 你总共有",
    "\n      Be aware that most features are strategic for Hard mode.": "\n 请注意，大多数功能对于困难模式都是战略性的。",
    "\n      Select the difficulty that's best for you.": "\n 选择最适合你的难度。",
    "\n      This game is currently consists of 2 layers and 6 features.": "\n 该游戏目前由 2 层和 6 个功能组成。",
    "\n      You can either use Rediscovery to speedrun or try a harder difficulty.": "\n 您可以使用 Rediscovery 来加速或尝试更难的难度。",
    "\n      You can find more detailed mode info in Stats -> Modes (but only for the mode you're on)": "\n 您可以在 Stats -> Modes 中找到更详细的模式信息（但仅限于您所在的模式）",
    "- \"Precious\" now requires 9 enhances.": "- “珍贵”现在需要 9 次增强。",
    "- \"Time Trial\" has been replaced with \"One with the Only.\"": "- \"计时赛\"已被\"One with the Only.\"替换",
    "- A missing \"1 Booster\" milestone has been added.": "- 添加了一个缺失的“1 Booster”里程碑。",
    "- Achievement rows now show when you have 7 achievements at previous\n          row.": "- 成就行现在显示当您在前一行有 7 个成就时\n。",
    "- Automation now hides if the content is currently locked.": "- 如果内容当前被锁定，自动化现在会隐藏。",
    "- Automation options now update on change.": "- 自动化选项现在随更改而更新。",
    "- Booster Milestones now hide on Darken.": "- 助推器里程碑现在隐藏在变暗上。",
    "- Boosters now superscale at 250.": "- 助推器现在超大规模 250。",
    "- Brought back the original icons.": "- 带回原来的图标。",
    "- Buttons are no longer thin.": "- 纽扣不再纤细。",
    "- Changed save format. (you can still import with the old format in\n          settings)": "- 更改了保存格式。 （您仍然可以在\n 设置中使用旧格式导入）",
    "- Changed the \"black\" colors to make them more colorful.": "- 更改了“黑色”颜色，使其更加丰富多彩。",
    "- Changed the costs for Dark Upgrades 6 and 7.": "- 更改了黑暗升级 6 和 7 的成本。",
    "- Changed the formula for Dark Upgrade 5.": "- 更改了黑暗升级 5 的公式。",
    "- Changed the icons for Buildings and Boosters! (by meta)": "- 更改了建筑物和助推器的图标！ （按元）",
    "- Consumption now requires 13 boosters.": "- 消耗现在需要 13 个助推器。",
    "- Dark Booster's effect now caps at 1.5x per Dark Toning.": "- 黑暗助推器的效果现在上限为每个黑暗色调 1.5 倍。",
    "- Dark Upgrade 10 now allows you to max tonings.": "- 黑暗升级 10 现在允许您将色调最大化。",
    "- Dark Upgrade 4 is now a constant multiplier.": "- 黑暗升级 4 现在是一个恒定乘数。",
    "- Dark World now shows a different background.": "- 黑暗世界现在显示不同的背景。",
    "- Fixed a lot of bugs!": "- 修复了很多错误！",
    "- Heavily nerfed \"remaining boosters\" for consumption by 75%.": "- 严重削弱了“剩余的助推器”，消耗量减少了 75%。",
    "- Heavily nerfed Heatant's effect.": "- 严重削弱了 Heatant 的效果。",
    "- Improved Auto Consumption by 1 tick.": "- 将自动消耗提高 1 个刻度。",
    "- Improved offline progress.": "- 改进了离线进度。",
    "- Improved the style for milestones and recall.": "- 改进了里程碑和召回的风格。",
    "- Loading screen now changes each time we add a new layer.": "- 现在每次我们添加新图层时加载屏幕都会发生变化。",
    "- Main tab is now reformatted and less confusing.": "- 主选项卡现在重新格式化并且不那么混乱。",
    "- Merged \"news ticker\" options.": "- 合并“新闻行情”选项。",
    "- Moved consumption into \"Main\" tab.": "- 将消费移至“主要”选项卡。",
    "- Nerfed Point Upgrades 6 and 7.": "- 削弱点升级 6 和 7。",
    "- Player data for Abilities and Recall has been restructured.": "- 能力和召回的球员数据已经过重组。",
    "- Player data for Boosters and Darken is now unassigned until you unlock respective layers.": "- 助推器和变暗的玩家数据现在未分配，直到您解锁相应的层。",
    "- Rebalanced Dark Tonings.": "- 重新平衡了暗色调。",
    "- Rebalanced Enhancements for post-Consumption.": "- 重新平衡消费后的增强功能。",
    "- Removed couple Recall Resources.": "- 删除了几个召回资源。",
    "- Removed Curved News Ticker.": "- 删除了弯曲的新闻代码。",
    "- Removed lore for now... :(": "- 暂时删除了传说...... :(",
    "- Removed scalings for now! :D": "- 暂时移除缩放！ :D",
    "- Scattered automation options into Main tab.": "- 分散的自动化选项进入主选项卡。",
    "- Tab buttons are now significantly larger.": "- 标签按钮现在明显变大了。",
    "- The version now always show and recolored.": "- 版本现在总是显示和重新着色。",
    "- The version now always show and recolored.\n": "- 版本现在总是显示并重新着色。\n",
    "- Theme selector now has a dropdown.": "- 主题选择器现在有一个下拉菜单。",
    "- There is now a hotkey display on each reset.": "- 现在每次重置都有一个热键显示。",
    "- Time now displays minutes, hours, days, weeks, and years.": "- 时间现在显示分钟、小时、天、周和年。",
    "- Unlocking a new layer now displays rewards.": "- 解锁新层现在会显示奖励。",
    "- Unlocking a new layer now only flashes once.": "- 解锁新层现在只闪烁一次。",
    "(0) Enhance: ??? boosters": "(0) 增强：???助推器",
    "(1) Enhance: 1.50 Boosters": "(1) 增强：1.50 助推器",
    "(A) Auto: OFF": "(A) 自动：关闭",
    "(A) Auto: ON": "(A) 自动：开",
    "(B) \n \t              成本: ": "(B) \n \t 报价：",
    "(Click to dismiss)": "（点击解散）",
    "(M) Buy max": "(M) 最大购买",
    "(not longest)": "（不是最长的）",
    "(Recall Base)": "（召回基地）",
    "[and there are a LOT of messages]": "[还有很多消息]",
    "[Up to:": "[取决于：",
    "% chance of triggering a rollback\n        every time you press a button!": "每次按下按钮时都有 % 的几率触发回滚\n！",
    "+ Added more news ticker messages, of course.\n": "+ 当然，添加了更多新闻行情消息。\n",
    "+ Added settings, 8 new themes, credits, lore, changelog, and\n          achievements.": "+ 添加了设置、8 个新主题、学分、传说、更改日志和\n 成就。",
    "+ Finally released easier modes! :D": "+ 终于发布了更简单的模式！ :D",
    "+ Implemented Darken Challenges.": "+ 实施变暗挑战。",
    "+ Implemented Rediscoveries.": "+ 实施重新发现。",
    "+ Implemented Rediscoveries.\n": "+ 实施重新发现。\n",
    "+ Implmented Darken and Dark Upgrades.": "+ 实施变暗和变暗升级。",
    "Achieve 50x booster speed.": "实现 50 倍助推器速度。",
    "All consumptions consumes 0.25 less Boosters.": "所有消耗消耗的助推器减少 0.25。",
    "All Dark Resource gains are at [0, 0, 0] factors.": "所有暗资源增益都在 [0, 0, 0] 因子处。",
    "All Dark Resource gains are at half of your Recall Factors.": "所有暗资源增益都是你召回因子的一半。",
    "All Dark Resources are obtainable with no factors.": "所有黑暗资源都可以在没有任何因素的情况下获得。",
    "Allow it to consume you.": "让它吞噬你。",
    "Alloy": "合金",
    "Artists": "艺术家",
    "Automate boosters every 2 seconds, and passively get boosters up to 5 lower than maximum gain.": "每 2 秒自动执行一次助推器，并被动获得比最大增益低 5 倍的助推器。",
    "Automate Enhance and Consumption. Additionally, you can max use Tonings.": "自动化增强和消费。此外，您可以最大限度地使用 Tonings。",
    "Automate Point Upgrades.": "自动化点升级。",
    "Balanced up to: Dark World [WIP]": "平衡至：黑暗世界 [WIP]",
    "Balanced up to: Endgame": "平衡至：残局",
    "Balanced up to: None! [WIP]": "平衡至：无！ [在制品]",
    "Beta: Build 1 - 2": "测试版：构建 1 - 2",
    "Booooooosted": "助推推推推器",
    "Booster\n          runs.": "助推器\n 运行。",
    "Booster Enhances are 10% cheaper.": "助推器增强便宜 10%。",
    "Booster:": "助推器：",
    "Booster: Starts at ": "助推器：开始于",
    "Boosters": "助推器",
    "Boosters left: 0.00": "剩余助推器：0.00",
    "Boosters.": "助推器。",
    "Boostless": "无增压",
    "Bravery": "勇敢",
    "building costs)": "建筑成本）",
    "Get 1.00 N while consuming 6 times.": "消耗 6 次时获得 1.00 N。",
    "Get 1.00e100 points. Reward: Gain +25% more Dark Matter.": "获得 1.00e100 积分。奖励：获得 +25% 更多暗物质。",
    "Get 10,000 Dark Energy.": "获得 10,000 暗能量。",
    "Get 100 Recall Base to gain extra resources.": "获得 100 召回基地以获得额外资源。",
    "Hard Changes": "硬变",
    "Heatant": "加热剂",
    "Heatant ->": "加热剂 ->",
    "Highest Dark Energy in all Boosters:": "所有助推器中最高的暗能量：",
    "Highest points in all Boosters:": "所有助推器中的最高分：",
    "Highest points in all Darkens:": "所有变暗的最高点：",
    "Highest points:": "最高点：",
    "Hoster": "主持人",
    "Hot Dark Matter": "热暗物质",
    "Hover over a resource's name to see its requirements.": "将鼠标悬停在资源名称上以查看其要求。",
    "I'm Feeling Lucky": "我感觉我是幸运的",
    "incremental_gamer": "增量玩家",
    "Intended mode. Does not change anything.": "预期模式。不会改变任何东西。",
    "Iridium": "铱",
    "Iridium ->": "铱->",
    "jakub": "雅库布",
    "jwklong": "jwklong",
    "Keep your automation, and you can buy max Boosters.": "保持自动化，您可以购买最大的助推器。",
    "Maker: Starts at ": "制造商：开始于",
    "Makers produce points 10x faster.": "制造商产生积分的速度提高了 10 倍。",
    "Maximum level for all Tonings are increased by 1.": "所有 Tonings 的最高等级增加 1。",
    "Maximum Recall for each Factor:": "每个因素的最大召回率：",
    "Medium Changes": "中等变化",
    "Microwave (by TheMKeyHolder)": "微波（由 TheMKeyHolder 提供）",
    "Multiply Dark Toning 1's effect by 1.9x.": "将 Dark Toning 1 的效果乘以 1.9 倍。",
    "Multiply Recall Resources by 2x.": "将召回资源乘以 2 倍。",
    "Nerd Boosters": "书呆子助推器",
    "Next toning at": "下一个色调在",
    "Nonexistent": "不存在的",
    "Perform 100 Booster resets in total.": "总共执行 100 次助推器重置。",
    "Playing: ???": "播放：？？？",
    "QwQe308": "QwQe308",
    "Raise Upgrade 1's effect to the power of 1.3.": "将升级 1 的效果提高到 1.3 的幂。",
    "randomtuba": "随机大号",
    "Rediscovery": "重新发现",
    "Reduce difficulty": "降低难度",
    "Release the Boosters": "释放助推器",
    "remaining": "其余的",
    "Resize: Raise points by ^": "调整大小：将分数提高 ^",
    "Respec": "尊重",
    "Retro (by jwklong)": "复古（来自 jwklong）",
    "sacrificed": "牺牲了",
    "Scalings": "缩放比例",
    "See this = news broken": "看到这个=新闻坏了",
    "Seven-Packed": "七件装",
    "Simplified Compact (by DeLorean)": "简化契约（DeLorean）",
    "Space Crystal": "太空水晶",
    "Space Crystal +": "空间水晶 +",
    "Speedrunner": "速跑者",
    "Starts at ": "开始于",
    "Sussy (by jwklong)": "苏西（来自 jwklong）",
    "TehAarex": "TehAarex",
    "The recall base is equal to the product of all three recall factors,\n          and it boosts how much of extra resources you get.": "召回基础等于所有三个召回因素的乘积，\n 它会增加您获得多少额外资源。",
    "TheMkeyHolder": "钥匙持有人",
    "There are 2 new milestones for C1 completions": "C1 完成有 2 个新的里程碑",
    "There is only 1 Building Enhancement and it affects all Buildings.": "只有 1 个建筑增强，它会影响所有建筑。",
    "There's only 1 Building Enhancement but 2x more expensive.": "只有 1 个建筑增强功能，但要贵 2 倍。",
    "These conversions scale based on your products.": "这些转化会根据您的产品进行扩展。",
    "Thruster": "推进器",
    "Time Crystal": "时间水晶",
    "Time Crystal ->": "时间水晶 ->",
    "Time since last booster reset:": "自上次助推器重置以来的时间：",
    "Time since last darken reset:": "自上次变暗重置以来的时间：",
    "Time:": "时间：",
    "Timewarp Power is capped at 2x. Above this it will speed up pre-Darken instead.": "时间扭曲力量上限为 2 倍。在此之上，它将加速预变暗。",
    "Timewarp Power is capped at 2x. Above this will speed up pre-Darken instead.": "时间扭曲力量上限为 2 倍。高于此将加速预变暗。",
    "Timewarp Power speeds up pre-Darken instead.": "时间扭曲力量反而加快了黑暗前的速度。",
    "Timewarp:": "时间扭曲：",
    "Timewarp: Jump +": "时间扭曲：跳跃 +",
    "to amount used in cost formula": "成本公式中使用的金额",
    "Total Abilities:": "总能力：",
    "Total Blackout": "总停电",
    "Total enhances used:": "使用的总增强：",
    "Total Fuses:": "保险丝总数：",
    "Triple Generator Production.": "三重发电机生产。",
    "Uneffective": "无效",
    "Unlock Abilities and Recall.": "解锁能力和召回。",
    "Unlock Creators. (cannot be enhanced)": "解锁创作者。 （无法增强）",
    "Unlock Max All and Enhancements.": "解锁 Max All 和增强功能。",
    "Unlock the ability to respec Enhances.": "解锁重新规范增强的能力。",
    "UNLOCKED": "解锁",
    "Upgrade 1 has a better formula.": "升级 1 有一个更好的公式。",
    "Upgrade 2 has a better formula.": "升级 2 有一个更好的公式。",
    "Use a Resizer to raise Points by ^1.5. Reward: The Resizer efficiency is ^2 instead of ^1.75.": "使用 Resizer 将点数提高 ^1.5。奖励：Resizer 效率为 ^2 而不是 ^1.75。",
    "Use abilities 25 times.": "使用技能 25 次。",
    "Use!": "利用！",
    "Wannacry (by incremental_gamer, DANGEROUS!)": "Wannacry（incremental_gamer，危险！）",
    "You can either use Rediscovery to speedrun or try a harder difficulty.": "您可以使用 Rediscovery 来加速或尝试更难的难度。",
    "You can increase each recall factor to nerf it, while providing a\n          greater variety of resources upon a Darken reset.": "你可以增加每个召回因素来削弱它，同时在黑暗重置时提供更多种类的资源。",
    "You get 2 Recall Channels at the start of the game. (WIP)": "您在游戏开始时获得 2 个召回通道。 （在制品）",
    "You have a": "你有一个",
    "You have a total of": "你一共有",
    "You have performed": "你执行了",
    "You have restarted": "您已重新启动",
    "You will reset everything before this point, as well as Boosters and\n            Consumption.": "您将在此之前重置所有内容，以及助推器和\n 消耗。",
    "You will unlock Darken Upgrades and Booster Enhancements to speed up\n            your journey.": "您将解锁 Darken Upgrades 和 Booster Enhancements 以加快您的旅程。",
    "Booster Confirm: OFF": "助推器确认：关闭",
    "Booster Confirm: ON": "助推器确认：打开",
    "Mixed Scientifc": "混合科学",
    "Respec Confirm: ON": "重洗确认：打开",
    "Respec Confirm: OFF": "重洗确认：关闭",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Trivial Changes": "细微的变化",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Required recalls: ": "需要召回：",
    "Offline: ": "离线: ",
    "Auto: ": "自动: ",
    "Auto Upgrades: ": "自动升级：",
    "Offline progress: ": "离线进度：",
    "Offline Progress: ": "离线进度：",
    "News ticker: ": "新闻行情：",
    "Notation: ": "符号：",
    "Absurd Mode: ": "荒诞模式：",
    "Consume Confirm: ": "消耗确认：",
    "Darken Confirm: ": "暗确认：",
    "Generator: ": "发生器: ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    " (Alloy resource)": " (合金资源)",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\+ Added(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Get (.+) Boosters.$/, '获得 $1 助推器。'],
    [/^Get (.+) points.$/, '获得 $1 点数。'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) Boosters$/, '$1 助推器'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);