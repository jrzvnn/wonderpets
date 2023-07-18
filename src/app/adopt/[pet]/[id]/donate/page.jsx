"use client";

import React from "react";
import styles from "@/app/adopt/[pet]/[id]/apply/page.module.css";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { getPet } from "@/app/firebase/pets";
import { submitApplication } from "@/app/firebase/application";
import { getStorage, getDownloadURL, ref } from "firebase/storage";


