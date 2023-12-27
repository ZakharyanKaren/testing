"use client";

import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";

import Modal from "./components/Modal/Modal";
import ApplyForm from "./components/ApplyForm/ApplyForm";

// import { useSingleRequest } from "@/shared/hooks/useRequests/useRequests";
import { getCareerPostById } from "@/shared/services/careerService/career.service";
// import { CareerPostsData } from "@/shared/types";
import ModuleLayout from "@/shared/layouts/ModuleLayout/ModuleLayout";
import Image from "@/shared/components/Image/Image";
import Divider from "@/shared/components/Divider/Divider";

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

const SinglePostModule = () => {
  const pathname = usePathname();
  const postId: number = Number(pathname.split("/").pop());
  const [isOpen, setOpen] = useState(false);
  const postData = postsData.results.find(post => post.id === postId);
  const fetchPost = useCallback(() => getCareerPostById(postId), [postId]);

  // const [postData, loading] = useSingleRequest<CareerPostsData>(fetchPost);

  if (!postData) {
    return <div>Loading...</div>;
  }

  function convertDate(dateString: string) {
    const parts = dateString.split("-");

    return `${parts[2]}.${parts[1]}.${parts[0]}`;
  }

  const responsibilities = postData.job_details.responsibilities.map((responsibility, index) => (
    <li key={index}>{responsibility}</li>
  ));

  const requiredQualifications = postData.job_details.required_qualifications.map((qualification, index) => (
    <li key={index}>{qualification}</li>
  ));

  const handleClickApply = () => {
    setOpen(true);
  };

  return (
    <ModuleLayout title1='be part of' title2='our mission' titleClassName='text-right'>
      <div className='mt-6 sm-mt-8 md:mt-12 lg:mt-15'>
        <p className='text-bodym md:text-mxs xl:text-xs'>{postData.job_title}</p>

        <div className='flex flex-col md:flex-row justify-between gap-y-7 mt-6 md:mt-8 lg:mt-10 xl:mt-12'>
          <div className='flex flex-col w-full md:w-[55%] gap-y-6'>
            <div>
              <p className='text-mbodym md:text-sbodym lg:text-bodym'>Job Description</p>
              <p className='text-mbodyxs md:text-bodyxs mt-4'>{postData.job_details.description}</p>
            </div>

            <div>
              <p className='text-mbodym md:text-sbodym lg:text-bodym'>Responsibilities:</p>
              <ul className='list-disc text-mbodyxs md:text-bodyxs pl-5 mt-4'>{responsibilities}</ul>
            </div>
            <div>
              <p className='text-mbodym md:text-sbodym lg:text-bodym'>Required Qualifications:</p>
              <ul className='list-disc text-mbodyxs md:text-bodyxs pl-5 mt-4'>{requiredQualifications}</ul>
            </div>
          </div>

          <div>
            <div className='w-full xl:w-[287px] border border-grey-300 rounded-[10px]'>
              <div className='flex flex-col gap-y-3 p-6'>
                <p className='text-mbodym md:text-sbodym xl:text-bodym'>Job Information</p>
                <div className='text-mbodyxs md:text-bodyxs'>
                  <p>Industry</p>
                  <p className='opacity-50 mt-[6px]'>{postData.job_details.industry}</p>
                </div>
                <div className='text-mbodyxs md:text-bodyxs'>
                  <p>Work experience</p>
                  <p className='opacity-50 mt-[6px]'>{postData.job_details.work_experience}</p>
                </div>
                <div className='text-mbodyxs md:text-bodyxs'>
                  <p>Deadline</p>
                  <p className='opacity-50 mt-[6px]'>{convertDate(postData.job_details.deadline)}</p>
                </div>
              </div>

              <Divider className='bg-grey-300' />

              <div className='flex justify-between p-6 cursor-pointer' onClick={handleClickApply}>
                <p className='text-bodyxs md:text-bodys'>Apply for a position</p>
                <Image src='/svgs/top_right_arrow_icon.svg' width={40} height={40} alt='arrow' className='w-6 h-6' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
        <ApplyForm />
      </Modal>
    </ModuleLayout>
  );
};

export default SinglePostModule;
