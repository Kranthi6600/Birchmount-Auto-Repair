"use client";

import { useEffect, useState, useCallback } from "react";
import {
    fetchServices,
    fetchServiceBySlug,
    fetchServiceFaqs,
    fetchServiceCategories,
    type ApiService,
    type ApiFaq,
    type ApiCategory,
} from "@/lib/api";

export function useServices() {
    const [data, setData] = useState<ApiService[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        let cancelled = false;
        setIsLoading(true);
        fetchServices()
            .then((services) => {
                if (!cancelled) {
                    setData(services);
                    setError(null);
                }
            })
            .catch((err) => {
                if (!cancelled) setError(err);
            })
            .finally(() => {
                if (!cancelled) setIsLoading(false);
            });
        return () => { cancelled = true; };
    }, []);

    return { data, isLoading, error };
}

export function useService(slug: string) {
    const [data, setData] = useState<ApiService | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchService = useCallback(() => {
        if (!slug) {
            setIsLoading(false);
            return;
        }
        setIsLoading(true);
        fetchServiceBySlug(slug)
            .then((service) => {
                setData(service);
                setError(null);
            })
            .catch((err) => setError(err))
            .finally(() => setIsLoading(false));
    }, [slug]);

    useEffect(() => {
        fetchService();
    }, [fetchService]);

    return { data, isLoading, error, refetch: fetchService };
}

export function useServiceFaqs(slug: string) {
    const [data, setData] = useState<ApiFaq[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!slug) {
            setIsLoading(false);
            return;
        }
        setIsLoading(true);
        fetchServiceFaqs(slug)
            .then((faqs) => setData(faqs))
            .finally(() => setIsLoading(false));
    }, [slug]);

    return { data, isLoading };
}

export function useServiceCategories() {
    const [data, setData] = useState<ApiCategory[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetchServiceCategories()
            .then((cats) => setData(cats))
            .finally(() => setIsLoading(false));
    }, []);

    return { data, isLoading };
}
