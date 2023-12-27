"use client";

import { useCallback, useEffect, useState } from "react";

import FiltersContainer from "./containers/FiltersContainer/FiltersContainer";
import PostsContainer from "./containers/PostsContainer/PostsContainer";

// import { getCareerPosts } from "@/shared/services/careerService/career.service";
import ModuleLayout from "@/shared/layouts/ModuleLayout/ModuleLayout";
import { getCareerPosts } from "@/shared/services/careerService/career.service";
// import { useRequests } from "@/shared/hooks/useRequests/useRequests";
// import { CareerPostsData } from "@/shared/types";

const postsData = {
  count: 4,
  next: null,
  previous: null,
  results: [
    {
      id: 1,
      job_details: {
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        responsibilities: [
          "Monitor product's business and functional requirements, develop an automation test plan, and design an efficient automation framework for web product testing.",
          "Develop automated tests in the required framework and monitor all development cycles to ensure early involvement.",
          "Work closely with developers, product owners, and testers to develop automated testing components; maintain automation scripts.",
          "Review product changes & coordinate with developers to provide efficient feedback.",
          "Monitor automation tests' development concepts to recommend appropriate automation solutions, evaluate scripts, and recommend changes as per requirements.",
          "Monitor automated test runs and analyzes and identifies the presence of any bugs in the system.",
          "Foster a continuous improvement approach to QA activities.",
          "Review nonconforming issues and provide suitable recommendations."
        ],
        required_qualifications: [
          "Experience in modern web applications",
          "Understanding of selector engines Css selectors/XPATH",
          "Good knowledge of the latest ECMAScript standards",
          "Experience in Linux",
          "Experience in Git or in any other VCS",
          "Experience in APIs and API testing tools/frameworks will be a plus",
          "Experience in Bash programming will be a plus",
          "Knowledge of Web Servers, Docker, Jenkins, or other CI tools will be a big plus",
          "Experience in Jest, Enzyme, Cypress, Playwright, and Puppeteer will be a big plus",
          "Experience with bug tracking systems (JIRA)",
          "Understanding of smoke testing, regression testing, functional testing, and non-functional testing is required"
        ],
        industry: "Technology",
        work_experience: "1-3 years",
        deadline: "2023-12-15"
      },
      job_title: "Customer Success Manager",
      description: "We’re looking for a customer success manager to join our team.",
      remote: "100% remote",
      timing: "Full-time",
      job_type: "Finance",
      creation_date: "2023-12-18T19:43:22.075230Z"
    },
    {
      id: 2,
      job_details: {
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        responsibilities: [
          "Monitor product's business and functional requirements, develop an automation test plan, and design an efficient automation framework for web product testing.",
          "Develop automated tests in the required framework and monitor all development cycles to ensure early involvement.",
          "Work closely with developers, product owners, and testers to develop automated testing components; maintain automation scripts.",
          "Review product changes & coordinate with developers to provide efficient feedback.",
          "Monitor automation tests' development concepts to recommend appropriate automation solutions, evaluate scripts, and recommend changes as per requirements.",
          "Monitor automated test runs and analyzes and identifies the presence of any bugs in the system.",
          "Foster a continuous improvement approach to QA activities.",
          "Review nonconforming issues and provide suitable recommendations."
        ],
        required_qualifications: [
          "Experience in modern web applications",
          "Understanding of selector engines Css selectors/XPATH",
          "Good knowledge of the latest ECMAScript standards",
          "Experience in Linux",
          "Experience in Git or in any other VCS",
          "Experience in APIs and API testing tools/frameworks will be a plus",
          "Experience in Bash programming will be a plus",
          "Knowledge of Web Servers, Docker, Jenkins, or other CI tools will be a big plus",
          "Experience in Jest, Enzyme, Cypress, Playwright, and Puppeteer will be a big plus",
          "Experience with bug tracking systems (JIRA)",
          "Understanding of smoke testing, regression testing, functional testing, and non-functional testing is required"
        ],
        industry: "Technology",
        work_experience: "1-3 years",
        deadline: "2023-12-15"
      },
      job_title: "Manager",
      description: "We’re looking for a manager to join our team.",
      remote: "100% remote",
      timing: "Full-time",
      job_type: "Management",
      creation_date: "2023-12-18T19:43:51.765458Z"
    },
    {
      id: 3,
      job_details: {
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        responsibilities: [
          "Monitor product's business and functional requirements, develop an automation test plan, and design an efficient automation framework for web product testing.",
          "Develop automated tests in the required framework and monitor all development cycles to ensure early involvement.",
          "Work closely with developers, product owners, and testers to develop automated testing components; maintain automation scripts.",
          "Review product changes & coordinate with developers to provide efficient feedback.",
          "Monitor automation tests' development concepts to recommend appropriate automation solutions, evaluate scripts, and recommend changes as per requirements.",
          "Monitor automated test runs and analyzes and identifies the presence of any bugs in the system.",
          "Foster a continuous improvement approach to QA activities.",
          "Review nonconforming issues and provide suitable recommendations."
        ],
        required_qualifications: [
          "Experience in modern web applications",
          "Understanding of selector engines Css selectors/XPATH",
          "Good knowledge of the latest ECMAScript standards",
          "Experience in Linux",
          "Experience in Git or in any other VCS",
          "Experience in APIs and API testing tools/frameworks will be a plus",
          "Experience in Bash programming will be a plus",
          "Knowledge of Web Servers, Docker, Jenkins, or other CI tools will be a big plus",
          "Experience in Jest, Enzyme, Cypress, Playwright, and Puppeteer will be a big plus",
          "Experience with bug tracking systems (JIRA)",
          "Understanding of smoke testing, regression testing, functional testing, and non-functional testing is required"
        ],
        industry: "Technology",
        work_experience: "1-3 years",
        deadline: "2023-12-15"
      },
      job_title: "HR",
      description: "We’re looking for an HR to join our team.",
      remote: "100% remote",
      timing: "Full-time",
      job_type: "Customer Service",
      creation_date: "2023-12-18T19:44:17.286235Z"
    },
    {
      id: 4,
      job_details: {
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        responsibilities: [
          "Monitor product's business and functional requirements, develop an automation test plan, and design an efficient automation framework for web product testing.",
          "Develop automated tests in the required framework and monitor all development cycles to ensure early involvement.",
          "Work closely with developers, product owners, and testers to develop automated testing components; maintain automation scripts.",
          "Review product changes & coordinate with developers to provide efficient feedback.",
          "Monitor automation tests' development concepts to recommend appropriate automation solutions, evaluate scripts, and recommend changes as per requirements.",
          "Monitor automated test runs and analyzes and identifies the presence of any bugs in the system.",
          "Foster a continuous improvement approach to QA activities.",
          "Review nonconforming issues and provide suitable recommendations."
        ],
        required_qualifications: [
          "Experience in modern web applications",
          "Understanding of selector engines Css selectors/XPATH",
          "Good knowledge of the latest ECMAScript standards",
          "Experience in Linux",
          "Experience in Git or in any other VCS",
          "Experience in APIs and API testing tools/frameworks will be a plus",
          "Experience in Bash programming will be a plus",
          "Knowledge of Web Servers, Docker, Jenkins, or other CI tools will be a big plus",
          "Experience in Jest, Enzyme, Cypress, Playwright, and Puppeteer will be a big plus",
          "Experience with bug tracking systems (JIRA)",
          "Understanding of smoke testing, regression testing, functional testing, and non-functional testing is required"
        ],
        industry: "Technology",
        work_experience: "1-3 years",
        deadline: "2023-12-15"
      },
      job_title: "Financier",
      description: "We’re looking for a Financier to join our team.",
      remote: "100% remote",
      timing: "Full-time",
      job_type: "Finance",
      creation_date: "2023-12-18T19:44:38.433214Z"
    }
  ]
};

function CareerModule() {
  const [activeTab, setActiveTab] = useState("View all");
  const [filteredData, setFilteredData] = useState(postsData.results);
  const fetchPosts = useCallback(() => getCareerPosts(activeTab === "View all" ? undefined : activeTab), [activeTab]);

  // const [postsData, loading] = useRequests<CareerPostsData[]>(fetchPosts);

  // just remove, dont think
  useEffect(() => {
    const jobType = activeTab === "View all" ? undefined : activeTab;
    if (jobType) {
      const filterData = postsData.results.filter(post => post.job_type === jobType);
      setFilteredData(filterData);
    } else {
      setFilteredData(postsData.results);
    }
  }, [activeTab]);

  return (
    <ModuleLayout title1='be part of' title2='our mission' titleClassName='text-right'>
      <FiltersContainer activeTab={activeTab} setActiveTab={setActiveTab} />
      <PostsContainer postsData={filteredData} />
    </ModuleLayout>
  );
}

export default CareerModule;
