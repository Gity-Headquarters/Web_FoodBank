import Layout from "../../Layout/Layout"
import Card from "../../components/Elements/Card/Card"
import TitlePage from "../../components/Elements/TitlePage/TitlePage"
import { welcomeAdmin } from "../../image"
import './dashboard.css'
import CardLinkDash from "../../components/Fragments/CardLinkDashboard/CardLinkDash"
import { CardDashboard } from "../../utils/DataObject"
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function Dasboard() {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstanceRef = useRef<Chart<"line"> | null>(null);
    const donutChartRef = useRef<HTMLCanvasElement | null>(null);
    const donutChartInstanceRef = useRef<Chart<"doughnut"> | null>(null);

    useEffect(() => {
        const ctx = chartRef.current?.getContext("2d");

        if (ctx) {
            // Destroy existing chart instance
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }

            // Create new chart instance with two datasets (lines)
            chartInstanceRef.current = new Chart(ctx, {
                type: "line",
                data: {
                    labels: [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December",
                    ],
                    datasets: [
                        {
                            label: "Pengguna Aktif",
                            data: [10, 17, 30, 15, 20, 25, 33, 10, 20, 20],
                            borderColor: "blue",
                            borderWidth: 2,
                        },
                        {
                            label: "Posko",
                            data: [
                                5, 15, 25, 33, 34, 12, 67, 33, 12, 10, 40, 50, 20, 40, 30,
                            ],
                            borderColor: "red",
                            borderWidth: 2,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            beginAtZero: true,
                        },
                        y: {
                            beginAtZero: true,
                        },
                    },
                    plugins: {
                        legend: {
                            position: "top",
                            align: "end",
                            labels: {
                                usePointStyle: true,
                                generateLabels: function (chart: any) {
                                    const labels = Chart.defaults.plugins.legend.labels.generateLabels(chart);
                                    labels.forEach((label: any) => {
                                        if (label.text === "Pengguna Aktif") {
                                            label.fillStyle = "blue";
                                        } else if (label.text === "Posko") {
                                            label.fillStyle = "red";
                                        }
                                    });
                                    return labels;
                                },
                            },
                        },
                    },
                },
            });
        }

        const donutCtx = donutChartRef.current?.getContext("2d");
        if (donutCtx) {
            // Destroy existing donut chart instance
            if (donutChartInstanceRef.current) {
                donutChartInstanceRef.current.destroy();
            }

            // Create new donut chart instance
            donutChartInstanceRef.current = new Chart(donutCtx, {
                type: "doughnut",
                data: {
                    labels: ["Pengguna Aktif", "Posko"],
                    datasets: [
                        {
                            data: [
                                [10, 17, 30, 15, 20, 25, 33, 10, 20, 20].reduce(
                                    (acc, value) => acc + value,
                                    0
                                ),
                                [5, 15, 25, 33, 34, 12, 67, 33, 12, 10, 40, 50, 20, 40, 30].reduce(
                                    (acc, value) => acc + value,
                                    0
                                ),
                            ],
                            backgroundColor: ["blue", "red"],
                            borderWidth: 2,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: "top",
                            align: "end",
                            labels: {
                                usePointStyle: true,
                                generateLabels: function (chart: any) {
                                    const labels = Chart.defaults.plugins.legend.labels.generateLabels(chart);
                                    labels.forEach((label: any) => {
                                        if (label.text === "Pengguna Aktif") {
                                            label.fillStyle = "blue";
                                        } else if (label.text === "Posko") {
                                            label.fillStyle = "red";
                                        }
                                    });
                                    return labels;
                                },
                            },
                        },
                    },
                },
            });
        }
    }, []);


    return (
        <Layout>
            <section className="dashboard" id="dashboard">
                <TitlePage title="Dashboard" />
                <section className="welcome-card">
                    <Card>
                        <div className=" row d-flex justify-content-start align-items-center px-5 py-4">
                            <div className="col-12 col-sm-7 text-start ">
                                <h2 className="fw-semibold" >Selamat Datang Kembali, Admin!</h2>
                                <span className="text-secondary" >Senang melihat Anda kembali. Mari kita mulai hari ini dengan mengelola situs ini.</span>
                            </div>
                            <img className="col-12 col-sm-5" src={welcomeAdmin} alt="welcomeIMG" />
                        </div>
                    </Card>
                </section>

                <section className="statistic-menu mt-3">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                        {CardDashboard.map((item, index) => (
                            <CardLinkDash key={index} title={item.title} icon={item.icon} total={item.total} percentase={item.percentase} raising={item.raising} />
                        ))}
                    </div>
                </section>

                <section className="statistic-chart mt-4    " >
                    <div className="row">
                        <div className="col-md-9 col-12">
                            <Card>
                                <canvas ref={chartRef} height="100"></canvas>
                            </Card>

                        </div>

                        <div className="col-md-3 col-12 ">
                            <Card >
                                <canvas ref={donutChartRef} height="315"></canvas>
                            </Card>
                        </div>

                    </div>

                </section>
            </section>
        </Layout>
    )
}

export default Dasboard