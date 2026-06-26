"use client";

import { useEffect, useState } from "react";
import { fetchBlogs, fetchBlogBySlug, type ApiBlog } from "@/lib/api";
import type { ApiBlogListResponse } from "@/lib/api";

export function useBlogs(page: number = 1, limit: number = 6) {
    const [data, setData] = useState<ApiBlog[] | null>(null);
    const [pagination, setPagination] = useState<ApiBlogListResponse["pagination"] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        let cancelled = false;
        setIsLoading(true);
        fetchBlogs(page, limit)
            .then((result) => {
                if (!cancelled) {
                    setData(result.data);
                    setPagination(result.pagination);
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
    }, [page, limit]);

    return { data, pagination, isLoading, error };
}

export function useBlog(slug: string) {
    const [data, setData] = useState<ApiBlog | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        let cancelled = false;
        if (!slug) {
            setIsLoading(false);
            return;
        }
        setIsLoading(true);
        fetchBlogBySlug(slug)
            .then((blog) => {
                if (!cancelled) {
                    setData(blog);
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
    }, [slug]);

    return { data, isLoading, error };
}
