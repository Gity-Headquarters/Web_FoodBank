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
                            label: "Total Pengguna",
                            data: [10, 17, 30, 15, 20, 25, 33, 10, 20, 20],
                            borderColor: "#883DCF",
                            borderWidth: 2,
                        },
                        {
                            label: "Posko",
                            data: [
                                5, 15, 25, 33, 34, 12, 67, 33, 12, 10, 40, 50, 20, 40, 30,
                            ],
                            borderColor: "#F86624",
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
                                        if (label.text === "Total Pengguna") {
                                            label.fillStyle = "#883DCF";
                                        } else if (label.text === "Posko") {
                                            label.fillStyle = "#F86624";
                                        }
                                    });
                                    return labels;
                                },

                            },
                        },
                        title: {
                            display: true,
                            text: "Statistik ",
                            font: {
                                size: 20,
                            },
                            color: "black",
                            position: "top",
                            align: "start",
                            padding: 20
                        },
                        subtitle: {
                            display: true,
                            text: "Dari Pengguna dan Posko",
                            font: {
                                size: 14
                            },
                            align: "start",

                        }
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

            // Data Posko
            const poskoData = [5, 15, 25, 33, 34, 12, 67, 33, 12, 10, 40, 50, 20, 40, 30];
            const totalPosko = poskoData.reduce((acc, value) => acc + value, 0);

            // Pengguna Aktif
            const penggunaAktif = 100 - totalPosko;

            // Create new donut chart instance
            donutChartInstanceRef.current = new Chart(donutCtx, {
                type: "doughnut",
                data: {
                    labels: ["Pengguna Aktif", "Posko"],
                    datasets: [
                        {
                            data: [penggunaAktif, totalPosko],
                            backgroundColor: ["#883DCF", "#F86624"],
                            borderWidth: 2,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: "bottom",
                            align: "end",
                            labels: {
                                usePointStyle: true,
                                generateLabels: function (chart) {
                                    const labels = Chart.defaults.plugins.legend.labels.generateLabels(chart);
                                    labels.forEach((label) => {
                                        if (label.text === "Pengguna Aktif") {
                                            label.fillStyle = "#883DCF";
                                        } else if (label.text === "Posko") {
                                            label.fillStyle = "#F86624";
                                        }
                                    });
                                    return labels;
                                },
                            },
                        },
                        title: {
                            display: true,
                            text: "Pelaporan",
                            font: {
                                size: 16,
                            },
                            color: "black",
                            position: "top",
                            align: "start",
                            padding: 20
                        },

                        subtitle: {
                            display: true,
                            text: "Donatur & Pengambilan Makanan  ",
                            font: {
                                size: 14
                            },
                            align: "start",

                        }
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
                            <Card className="p-3" >
                                <canvas ref={chartRef} height="100"></canvas>
                            </Card>

                        </div>

                        <div className="col-md-3 col-12 chart-2">

                            <Card className="p-3" >
                                <canvas ref={donutChartRef} height="335"></canvas>
                            </Card>
                        </div>

                    </div>

                </section>
            </section>
        </Layout>
    )
}

export default Dasboard