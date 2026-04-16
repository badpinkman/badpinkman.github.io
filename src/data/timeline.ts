/**
 * timeline.ts — 世界线数据档案
 *
 * 修改此文件来更新你的时间轴。
 * 每次 git push 后页面自动更新（GitHub Actions 构建部署）。
 *
 * type:
 *   'photo'   — 照片集 / 生活记录
 *   'project' — 项目展示
 *   'silence' — 空白期（可选填 note）
 *
 * 字段说明：
 *   id          — 唯一标识（不重复即可）
 *   date        — 起始日期，格式 "YYYY-MM" 或 "YYYY"
 *   dateTo      — 结束日期（仅 silence 需要，可选）
 *   title       — 标题
 *   description — 描述文字（silence 不需要）
 *   cover       — 封面图路径（如 "/photos/tokyo/cover.jpg"），无图填 null
 *   link        — 外链（如 GitHub 地址），无则填 null
 *   note        — 空白期注脚（可留空 null）
 */

export type TimelineItem =
  | {
      id: string;
      date: string;
      type: 'photo' | 'project';
      title: string;
      description: string;
      cover: string | null;
      link: string | null;
    }
  | {
      id: string;
      date: string;
      dateTo?: string;
      type: 'silence';
      note: string | null;
    };

const timeline: TimelineItem[] = [
  {
    id: "2025-04",
    date: "2025-04",
    type: "project",
    title: "World Line Archive",
    description: "赛博朋克风格的个人主页。以时间轴记录生活轨迹与项目历史，让空白期也能开口说话。",
    cover: null,
    link: "https://github.com/badpinkman/badpinkman.github.io",
  },
  {
    id: "2025-01",
    date: "2025-01",
    type: "photo",
    title: "城市里的冬天",
    description: "街角的霓虹灯在雨后的地面上留下倒影。那一刻感觉自己就活在赛博朋克小说里。",
    cover: null,
    link: null,
  },
  {
    id: "2024-07",
    date: "2024-07",
    dateTo: "2024-10",
    type: "silence",
    note: "在迷茫",
  },
  {
    id: "2024-03",
    date: "2024-03",
    type: "photo",
    title: "春天",
    description: "难得闲下来，去公园坐了一个下午。什么都没做，什么都没想。",
    cover: null,
    link: null,
  },
  {
    id: "2023-11",
    date: "2023-11",
    type: "project",
    title: "某个已经放弃的项目",
    description: "曾经觉得很有意思，后来发现只是在逃避别的事情。留在这里，算是一个诚实的记录。",
    cover: null,
    link: null,
  },
  {
    id: "2023-03",
    date: "2023-03",
    dateTo: "2023-09",
    type: "silence",
    note: null,
  },
];

export default timeline;
