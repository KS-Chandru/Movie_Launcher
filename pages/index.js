import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Login from "@/components/login/Login";

export default function Home() {
  return <Login></Login>;
}
