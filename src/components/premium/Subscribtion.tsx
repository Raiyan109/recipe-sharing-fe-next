'use client'
import { useCreatePayment } from '@/hooks/payment.hook';
import { IRecipe } from '@/types';
import React from 'react'

const Subscribtion = ({ recipe }: { recipe: IRecipe }) => {
    const { mutate: handleCreatePayment } = useCreatePayment();

    const handlePayment = (recipeId: string) => {
        handleCreatePayment({ recipe: recipeId, payableAmount: 1000 })
    }
    return (
        <div>
            <div className="p-4 h-screen ">
                <div
                    className="max-w-lg container mx-auto rounded-lg overflow-hidden lg:max-w-7xl lg:flex my-10 shadow-teal border-4 border-primary">
                    <div className="bg-card px-6 py-8 lg:flex-shrink-1 lg:p-12">
                        <h3
                            className="text-2xl text-left leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9 dark:text-gray-100">
                            Subscription
                        </h3>
                        <p className="mt-6 text-left font-ttnorms leading-8 text-gray-500 text-lg dark:text-gray-400">The Culinary Circle grants your
                            entire
                            As a subscriber to our website, you will have access to a wide range of exclusive benefits and perks.
                        </p>
                        <div className="mt-8">
                            <div className="flex items-center">
                                <h4
                                    className="flex-shrink-0 pr-4 text-sm leading-5 tracking-wider font-semibold uppercase text-primary">
                                    What is included
                                </h4>
                                <div className="flex-1 border-t-2 border-gray-200 dark:border-gray-700"></div>
                            </div>
                            <ul className="pl-0 mt-8 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 space-y-5 lg:space-y-0">
                                <li className="flex items-start lg:col-span-1">
                                    <div className="flex-shrink-0"><svg className="h-5 w-5 text-primary"
                                        fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd">
                                        </path>
                                    </svg>
                                    </div>
                                    <p className="ml-3 text-lg leading-5 text-gray-700 font-ttnorms text-left dark:text-gray-300">
                                        Access to premium content and exclusive articles
                                    </p>
                                </li>
                                <li className="flex items-start lg:col-span-1">
                                    <div className="flex-shrink-0"><svg className="h-5 w-5 text-primary"
                                        fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd">
                                        </path>
                                    </svg>
                                    </div>
                                    <p className="ml-3 text-lg leading-5 text-gray-700 font-ttnorms text-left dark:text-gray-300">
                                        Ad free smooth experience
                                    </p>
                                </li>
                                <li className="flex items-start lg:col-span-1">
                                    <div className="flex-shrink-0"><svg className="h-5 w-5 text-primary"
                                        fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd">
                                        </path>
                                    </svg>
                                    </div>
                                    <p className="ml-3 text-lg leading-5 text-gray-700 font-ttnorms text-left dark:text-gray-300">
                                        Early access to upcoming events and promotions
                                    </p>
                                </li>
                                <li className="flex items-start lg:col-span-1">
                                    <div className="flex-shrink-0"><svg className="h-5 w-5 text-primary"
                                        fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd">
                                        </path>
                                    </svg>
                                    </div>
                                    <p className="ml-3 text-lg leading-5 text-gray-700 font-ttnorms text-left dark:text-gray-300">
                                        Dedicated customer support
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="py-8 px-6 text-center bg-accent lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                        <p
                            className="text-xl leading-6 font-medium text-gray-900 lg:max-w-xs lg:mx-auto mb-0 lg:mb-6 dark:text-gray-100">
                            A single
                            payment for your entire team
                        </p>
                        <div
                            className="my-10 lg:my-6 flex items-baseline justify-center text-5xl leading-none font-extrabold text-gray-900 dark:text-gray-100">
                            <span className="font-brown">$19</span><span className="text-xl leading-7 font-medium text-gray-500 font-ttnorms">/month</span>
                        </div>
                        <div className="lg:mt-6">
                            <div className="rounded-md shadow">
                                <button
                                    className="flex items-center w-full justify-center px-5 py-3 leading-6 font-medium rounded-md focus:outline-none focus:ring transition duration-200 ease-in-out shadow-primary  bg-primary text-card text-lg relative z-20"
                                    onClick={() => handlePayment(recipe?._id)}
                                >
                                    Start your 7-day trial
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribtion