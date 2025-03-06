import './App.css'

type Experience = {
    title: string;
    period: string;
    description: string;
    details: string[];
    tech: string[];
}

const experiences:Experience[] = [
    {
        title: "動画配信 委託",
        period: "2020/11 ～ 現在",
        description: "オンデマンド、リニア送信サービスのサーバーサイドを担当",
        details: [
            "リニア編成ツールの改修",
            "オンデマンド特集枠データ整備",
            "外部連携カタログデータ加工",
        ],
        tech: ["Golang", "React", "Typescript", "k8s", "Terraform", "MySQL", "Redis"],
    },
    {
        title: "ブログアフィリエイトサービス新規構築",
        period: "2020/10 ～ 2021/5",
        description: "ブログへのアフィリエイトリンクを簡単に貼れるサービス構築",
        details: [
            "アフィリエイトタグの検索サービス",
            "管理ツールのReact, Typescript開発",
            "楽天, Amazon, UNIQLO提携管理",
        ],
        tech: ["Golang", "React", "Typescript", "Redux", "GCP", "Docker"],
    },
    {
        title: "SNSイベントサービス",
        period: "2019/7 ～ 2021/1",
        description: "SNS公式アカウントのいいね・シェアでポイント付与するサービス",
        details: [
            "仕様決定からリリースまでの開発",
            "Notionを活用した仕様管理",
            "AWS　EC2, RDS, CloudFront, Route53",
        ],
        tech: ["AWS", "EC2", "RDS", "CloudFront", "Route53"],
    },
];

const skills:string[] = [
    "Golang", "React", "TypeScript", "Redux", "Docker", "Kubernetes", "Terraform",
    "GCP", "AWS", "MySQL", "Redis", "MongoDB"
];

function App() {
    return (
        <div className="container">
            <header className="header">
                <h1>崔 承訓 (Choi Seung Hun)</h1>
                <p>Software Engineer | Web & Backend Developer</p>
            </header>

            <section className="experience">
                <h2>経験</h2>
                <div>
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-card">
                            <h3>{exp.title}</h3>
                            <p>{exp.period}</p>
                            <p>{exp.description}</p>
                            <ul>
                                {exp.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                            <p className="tech">使用技術: {exp.tech.join(", ")}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="skills">
                <h2>スキルセット</h2>
                <div className="skills-container">
                    {skills.map((skill, index) => (
                        <span key={index} className="skill-badge">{skill}</span>
                    ))}
                </div>
            </section>

            <footer className="footer">
                <p>お問い合わせ: show@canyons-itr.com</p>
            </footer>
        </div>
    );
}

export default App
